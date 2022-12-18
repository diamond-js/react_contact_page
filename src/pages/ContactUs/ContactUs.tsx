import { ChangeEvent, FC, useState } from "react";
import { useFormik } from "formik";
import "./styles.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { contactMethods } from "./constants";
import Select from "../../components/Select/Select";
import * as Yup from "yup";
type Props = {};

const ContactUs: FC<Props> = () => {
  const [showSubmittedModal, setShowSubmittedModal] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone_number: "",
      how_you_found_us: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please Enter Your Name"),
      email: Yup.string().email("Please Enter A Valid Email Address"),
      phone_number: Yup.string().required("Please Enter Your Phone Number"),
      how_you_found_us: Yup.string().required("Please How Did You Find Us"),
    }),
    onSubmit: () => {
      setTimeout(() => {
        formik.setSubmitting(false);
        setShowSubmittedModal(true);
      }, 3000);
    },
  });

  return (
    <div className="contact-page">
      <div className="contact-page__form-section">
        <div className="contact-page__form-section--content-wrapper">
          {/* FORM */}
          <form
            action="#"
            className="contact-page__form"
            onSubmit={formik.handleSubmit}
          >
            <h1 className="contact-page__form-heading black-txt">
              Get In <span className="red-txt">Touch</span>
            </h1>
            <p className="contact-page__form-paragraph black-txt">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
              leo molestie vel, ornare non id blandit netus.
            </p>

            <div className="contact-page__form-elements">
              <Input
                placeholder="Name"
                errorMsg={
                  formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : null
                }
                {...formik.getFieldProps("name")}
              />

              <Input
                placeholder="Email"
                errorMsg={
                  formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : null
                }
                {...formik.getFieldProps("email")}
              />
              <Input
                placeholder="Phone Number"
                type={"tel"}
                errorMsg={
                  formik.touched.phone_number && formik.errors.phone_number
                    ? formik.errors.phone_number
                    : null
                }
                {...formik.getFieldProps("phone_number")}
              />
              <Select
                options={[
                  "Through a friend",
                  "Through social media",
                  "Through advertisment",
                ]}
                placeholder="How did you find us"
                value={formik.values.how_you_found_us}
                errorMsg={
                  formik.errors.how_you_found_us
                    ? formik.errors.how_you_found_us
                    : null
                }
                onChange={(val) => formik.handleChange("how_you_found_us")(val)}
              />
              <Button
                disabled={!formik.isValid || formik.isSubmitting}
                type="submit"
              >
                {formik.isSubmitting ? "Sending..." : "Send"}
              </Button>
            </div>
          </form>
          {/* CONTACT METHODS */}
          <div className="contact-page__contact-methods">
            {contactMethods.map((contactMethod) => (
              <div
                key={contactMethod.name}
                className="contact-page__contact-method"
              >
                {" "}
                <img
                  src={contactMethod.icon}
                  alt=""
                  className="contact-page__contact-methods--icon"
                />
                <p className="contact-page__contact-methods--title black-txt">
                  {contactMethod.name}
                  <br />
                  <span className="red-txt">{contactMethod.value}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="contact-page__map-section">
        <div className="contact-page__mapbox">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22413.690810953703!2d6.106067422067737!3d6.743219628511605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104695caf90eaed1%3A0xc09ab003a9304a40!2sDublos%20Shoprite%20%26%20Pharmacy!5e0!3m2!1sen!2sng!4v1671084017628!5m2!1sen!2sng"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            //   referrerpolicy="no-referrer-when-downgrade"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {showSubmittedModal && (
        <div className="contact-page__submitted-modal">
          <div className="contact-page__submitted-modal-dialog">
            <h2>Success</h2>
            <p>
              Thank you for reaching out to us. We'll get back to you as soon as
              possible
            </p>
            <Button onClick={() => setShowSubmittedModal(false)}>OK</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
