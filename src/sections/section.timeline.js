import React from "react";
import { Container } from "reactstrap";
import Timeline from "react-dual-timeline";
import { StyleRoot } from "radium";
import ReactMarkdown from "react-markdown";

const TimelineComponent = ({
  title, description, timeline, linkTarget
}) => (
  <Container>
    {title && <h1>{title}</h1>}

    {description && <p>{description}</p>}
    <StyleRoot>
      <Timeline lineColor="#000" activeColor="#EEE">
        {timeline.map(({ isEntry, title, markdown }) => (
          <div isEntry={isEntry} style={{ textAlign: "left" }}>
            {title && <h2>{title}</h2>}
            {markdown && <ReactMarkdown source={markdown} linkTarget={linkTarget || "_blank"} />}
          </div>
        ))}
      </Timeline>
    </StyleRoot>
    <div style={{ height: 100 }} />
  </Container>
);

export default TimelineComponent;
