/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  MainContainer,
  HeaderContainer,
  HeaderText,
  ImgWrapperContainer,
  ImgContainer,
  Img,
  FormContainer,
  FormHeader,
  Form,
  Label,
  Input,
  AdditionalText,
  SubmitButton,
} from "./styles";
import { PDFDocument } from "pdf-lib";
import Anmeldung from "../../assets/img/anmeldung.png";

interface FormData {
  [key: string]: string;
  moveIn: string;
  newPostalCode: string;
  newStreet: string;
  moveOut: string;
  oldPostalCode: string;
  oldStreet: string;
  previousCountry: string;
  lastName: string;
  firstName: string;
  birthName: string;
  gender: string;
  dob: string;
  placeBirth: string;
  religion: string;
  nationality: string;
  artistName: string;
  documentType: string;
  authority: string;
  pdId: string;
  doi: string;
  doe: string;
}

const Main = () => {
  const [formData, setFormData] = useState<FormData>({
    // New Residence Details //
    moveIn: "",
    newPostalCode: "",
    newStreet: "",

    // Previous Residence Details //
    moveOut: "",
    oldPostalCode: "",
    oldStreet: "",
    previousCountry: "",

    // Personal Details //
    lastName: "",
    firstName: "",
    birthName: "",
    gender: "",
    dob: "",
    placeBirth: "",
    religion: "",
    nationality: "",
    artistName: "",

    // Document Details //
    documentType: "",
    authority: "",
    pdId: "",
    doi: "",
    doe: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertTag, setAlertTag] = useState("");

  // Validate //
  const isFormValid = () => {
    const requiredFields = [
      "moveIn",
      "newPostalCode",
      "newStreet",
      "moveOut",
      "oldPostalCode",
      "oldStreet",
      "lastName",
      "firstName",
      "gender",
      "dob",
      "placeBirth",
      "nationality",
      "documentType",
      "authority",
      "pdId",
      "doi",
      "doe",
    ];
    return requiredFields.every((field) => formData[field].trim() !== "");
  };

  // Handle input changes //
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Generate PDF //
  const handleSubmit = async () => {
    if (!isFormValid()) {
      setAlertTag("Please fill all the required fields.");
      return;
    }
    setIsSubmitting(true);
    try {
      const url = "/anmeldung.pdf";
      const existingPdfBytes = await fetch(url).then((res) =>
        res.arrayBuffer()
      );
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const form = pdfDoc.getForm();
      // Fill New Residence Section //
      form
        .getTextField("Neue Wohnung Tag des Einzugs")
        .setText(formData.moveIn || "");
      form
        .getTextField("Neue Wohnung des Einzugs Postleitzahl Gemeinde Ortsteil")
        .setText(formData.newPostalCode || "");
      form
        .getTextField("Neue Wohnung Straße Hausnummer Zusätze")
        .setText(formData.newStreet || "");
      // Fill Previous Residence Section //
      form
        .getTextField("Bisherige Wohnung Tag des Auszugs")
        .setText(formData.moveOut || "");
      form
        .getTextField("Bisherige Wohnung Postleitzahl Gemeinde Kreis Land")
        .setText(formData.oldPostalCode || "");
      form
        .getTextField("Bisherige Wohnung Straße Hausnummer Zusätze")
        .setText(formData.oldStreet || "");
      form
        .getTextField("Bei Zuzug aus dem Ausland Staat")
        .setText(formData.previousCountry || "");
      // Fill Personal Details Section //
      form
        .getTextField("Person 1 Familienname ggf Doktorgrad Passname")
        .setText(formData.lastName || "");
      form
        .getTextField("Person 1 Vornamen Rufnamen unterstreichen")
        .setText(formData.firstName || "");
      form
        .getTextField("Person 1 Geburtsname")
        .setText(formData.birthName || "");
      form.getTextField("Person 1 Geschlecht").setText(formData.gender || "");
      form
        .getTextField("Person 1 Tag Ort Land der Geburt")
        .setText(formData.placeBirth || "");
      form
        .getTextField("Person 1 Religionsgesellschaft")
        .setText(formData.religion || "");
      form
        .getTextField("Person 1 Staatsangehörigkeiten")
        .setText(formData.nationality || "");
      form
        .getTextField("Person 1 Ordens- Künstlername")
        .setText(formData.artistName || "");
      // Fill Document Details Section //
      form.getTextField("Dokument 1 Art").setText(formData.documentType || "");
      form
        .getTextField("Dokument 1 Ausstellungsbehörde")
        .setText(formData.authority || "");
      form.getTextField("Dokument 1 Seriennummer").setText(formData.pdId || "");
      form.getTextField("Dokument 1 Datum").setText(formData.doi || "");
      form.getTextField("Dokumente 1 gültig bis").setText(formData.doe || "");
      // Save the filled PDF //
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "Anmeldung_Form.pdf";
      link.click();
    } catch (error) {
      console.error("Error filling the PDF:", error);
    } finally {
      setIsSubmitting(false);
      setFormData({
        moveIn: "",
        newPostalCode: "",
        newStreet: "",
        moveOut: "",
        oldPostalCode: "",
        oldStreet: "",
        previousCountry: "",
        lastName: "",
        firstName: "",
        birthName: "",
        gender: "",
        dob: "",
        placeBirth: "",
        religion: "",
        nationality: "",
        artistName: "",
        documentType: "",
        authority: "",
        pdId: "",
        doi: "",
        doe: "",
      });
    }
  };

  return (
    <MainContainer>
      <HeaderContainer>
        <HeaderText>
          Fill out the form online or click the image to edit
        </HeaderText>
        <AdditionalText>
          We don't collect personal data; everything stays on your device's
          frontend
        </AdditionalText>
        <FormContainer>
          {/* New Residence Section */}
          <FormHeader>New Residence Information</FormHeader>
          <Form>
            <Label htmlFor="newStreet">Address*</Label>
            <Input
              type="text"
              id="newStreet"
              name="newStreet"
              value={formData.newStreet}
              onChange={handleChange}
              placeholder="e.g., Schloßstraße 5"
            />
            <Label htmlFor="newPostalCode">Postal Code, Municipality*</Label>
            <Input
              type="text"
              id="newPostalCode"
              name="newPostalCode"
              value={formData.newPostalCode}
              onChange={handleChange}
              placeholder="e.g., 12345 Berlin"
            />
            <Label htmlFor="moveIn">Move-In Date*</Label>
            <Input
              type="text"
              id="moveIn"
              name="moveIn"
              value={formData.moveIn}
              onChange={handleChange}
              placeholder="DD.MM.YYYY"
            />
          </Form>
          {/* Previous Residence Section */}
          <FormHeader>Previous Residence Information</FormHeader>
          <Form>
            <Label htmlFor="oldStreet">Address*</Label>
            <Input
              type="text"
              id="oldStreet"
              name="oldStreet"
              value={formData.oldStreet}
              onChange={handleChange}
              placeholder="e.g., Teichstraße 8"
            />
            <Label htmlFor="oldPostalCode">Postal Code, Municipality*</Label>
            <Input
              type="text"
              id="oldPostalCode"
              name="oldPostalCode"
              value={formData.oldPostalCode}
              onChange={handleChange}
              placeholder="e.g., 54321 Berlin"
            />
            <Label htmlFor="previousCountry">
              Previous Country (if applicable)
            </Label>
            <Input
              type="text"
              id="previousCountry"
              name="previousCountry"
              value={formData.previousCountry}
              onChange={handleChange}
              placeholder="e.g., Germany"
            />
            <Label htmlFor="moveOut">Move-Out Date*</Label>
            <Input
              type="text"
              id="moveOut"
              name="moveOut"
              value={formData.moveOut}
              onChange={handleChange}
              placeholder="DD.MM.YYYY"
            />
          </Form>

          {/* Personal Details Section */}
          <FormHeader>Personal Details</FormHeader>
          <Form>
            <Label htmlFor="lastName">Last Name*</Label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
            />
            <Label htmlFor="firstName">First Name*</Label>
            <Input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Jane"
            />
            <Label htmlFor="birthName">Birth Name*</Label>
            <Input
              type="text"
              id="birthName"
              name="birthName"
              value={formData.birthName}
              onChange={handleChange}
              placeholder="Original last name"
            />
            <Label htmlFor="gender">Gender*</Label>
            <Input
              type="text"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              placeholder="Male / Female / Other"
            />
            <Label htmlFor="dob">Date of Birth*</Label>
            <Input
              type="text"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              placeholder="DD.MM.YYYY"
            />
            <Label htmlFor="placeBirth">Place of Birth*</Label>
            <Input
              type="text"
              id="placeBirth"
              name="placeBirth"
              value={formData.placeBirth}
              onChange={handleChange}
              placeholder="City, Country"
            />
            <Label htmlFor="religion">Religion</Label>
            <Input
              type="text"
              id="religion"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              placeholder="e.g., Christianity, Islam"
            />
            <Label htmlFor="nationality">Nationality*</Label>
            <Input
              type="text"
              id="nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              placeholder="e.g., German"
            />
            <Label htmlFor="artistName">Artist/Pseudonym (if applicable)</Label>
            <Input
              type="text"
              id="artistName"
              name="artistName"
              value={formData.artistName}
              onChange={handleChange}
              placeholder="e.g., Stage Name"
            />
          </Form>

          {/* Document Details Section */}
          <FormHeader>Document Details</FormHeader>
          <Form>
            <Label htmlFor="documentType">Document Type*</Label>
            <Input
              type="text"
              id="documentType"
              name="documentType"
              value={formData.documentType}
              onChange={handleChange}
              placeholder="PA (ID), RP (Passport), etc."
            />
            <Label htmlFor="authority">Issuing Authority*</Label>
            <Input
              type="text"
              id="authority"
              name="authority"
              value={formData.authority}
              onChange={handleChange}
              placeholder="e.g., Berlin/Germany"
            />
            <Label htmlFor="pdId">Passport/ID Number*</Label>
            <Input
              type="text"
              id="pdId"
              name="pdId"
              value={formData.pdId}
              onChange={handleChange}
              placeholder="e.g., AB1234567"
            />
            <Label htmlFor="doi">Date Issued*</Label>
            <Input
              type="text"
              id="doi"
              name="doi"
              value={formData.doi}
              onChange={handleChange}
              placeholder="DD.MM.YYYY"
            />
            <Label htmlFor="doe">Expiration Date*</Label>
            <Input
              type="text"
              id="doe"
              name="doe"
              value={formData.doe}
              onChange={handleChange}
              placeholder="DD.MM.YYYY"
            />
          </Form>
          <AdditionalText>{alertTag}</AdditionalText>
          <SubmitButton onClick={handleSubmit}>
            {isSubmitting ? "Processing..." : "Generate PDF"}
          </SubmitButton>
        </FormContainer>
      </HeaderContainer>
      <ImgWrapperContainer>
        <ImgContainer>
          <a href="/anmeldung.pdf" target="_blank" rel="noopener noreferrer">
            <Img src={Anmeldung} alt="Anmeldung Instructions" />
          </a>
        </ImgContainer>
      </ImgWrapperContainer>
    </MainContainer>
  );
};

export default Main;
