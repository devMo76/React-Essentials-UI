import { useState } from "react";

import TabButton from "./TabButton";
import Section from "./Sections";
import { EXAMPLES } from "../data";
import Tabs from "./Tabs";

const TOPICS = [
  { id: "components", label: "Components" },
  { id: "jsx", label: "JSX" },
  { id: "props", label: "Props" },
  { id: "state", label: "State" },
];

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  const selectedExample = selectedTopic ? EXAMPLES[selectedTopic] : null;

  const tabContent = selectedExample ? (
    <div id="tab-content">
      <h3>{selectedExample.title}</h3>
      <p>{selectedExample.description}</p>
      <pre>
        <code>{selectedExample.code}</code>
      </pre>
    </div>
  ) : (
    <p>Please select a topic.</p>
  );

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            {TOPICS.map((topic) => (
              <TabButton
                key={topic.id}
                isSelected={selectedTopic === topic.id}
                onClick={() => setSelectedTopic(topic.id)}
              >
                {topic.label}
              </TabButton>
            ))}
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
