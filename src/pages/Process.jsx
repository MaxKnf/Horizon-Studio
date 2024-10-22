import React from "react";
import "./Process.css";
import ActionAreaCard from "../components/ActionAreaCard";
import consultation from "../assets/images/consultation.jpg";
import design_planning from "../assets/images/design_planning.jpg";
import execution from "../assets/images/execution.jpg";
import delivery from "../assets/images/delivery.jpg";

export default function Process() {
  return (
    <div className="process-page">
      <h1 className="process-title">Our Design Process</h1>
      <div className="card-section">
        <ActionAreaCard
          className="process-card"
          image={consultation}
          title="Step 1: Consultation"
          description="We begin by understanding your vision and discussing your needs to ensure the perfect design solution."
        />
        <div className="connector"></div>
        <ActionAreaCard
          className="process-card"
          image={design_planning}
          title="Step 2: Design & Planning"
          description="Our expert designers will create detailed plans and layouts tailored to your preferences."
        />
        <div className="connector"></div>
        <ActionAreaCard
          className="process-card"
          image={execution}
          title="Step 3: Execution"
          description="Once the design is finalized, we proceed to the execution phase with our team of skilled craftsmen."
        />
        <div className="connector"></div>
        <ActionAreaCard
          className="process-card"
          image={delivery}
          title="Step 4: Delivery"
          description="We deliver the final product to your doorstep with a seamless and stress-free experience."
        />
      </div>
    </div>
  );
}
