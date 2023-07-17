import React from "react";
import Form from "react-jsonschema-form";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const RangeSliderForm = () => {
  const schema = {
    title: "Range Slider",
    type: "object",
    properties: {
      range: {
        type: "integer",
        title: "Range",
      },
    },
  };

  const uiSchema = {
    range: {
      "ui:widget": "range",
      "ui:options": {
        min: 0,
        max: 100,
      },
    },
  };
  const CustomRangeWidget = (props) => {
    const { value = [10, 95], onChange } = props;

    const handleChange = (newRange) => {
      onChange(newRange);
    };

    return (
      <>
        <Slider
          range
          min={0}
          max={100}
          defaultValue={value}
          onChange={handleChange}
        />
        <div>
          <span style={{ fontWeight: "bold" }}>Min-Max: </span>
          {value[0]} - {value[1]}
        </div>
      </>
    );
  };
  const widgets = {
    range: CustomRangeWidget,
  };
  const handleChange = ({ formData }) => {
    console.log("Form submitted:", formData.range);
  };

  return (
    <div>
      <h2>Range Slider Form</h2>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        noHtml5Validate={true}
        widgets={widgets}
        onChange={handleChange}
      />
    </div>
  );
};

export default RangeSliderForm;
