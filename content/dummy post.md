---
date: "2023-01-01"
title: "Creating an Editable Accordion with Chakra UI"
author: "Eldora"
tags: ["web development"]
template: "post"
categories: ["Chakra"]
thumbnail: "https://avatars.githubusercontent.com/u/54212428?s=280&v=4"
description: "desc"
shortTitle: "short"
slug: accordion-chakra
---

## Step by Step Guide

Creating an accordion that allows users to add and delete rows in Chakra UI can be a great way to make a dynamic and interactive user interface. Chakra UI is a popular library for building user interfaces with React, and it offers a wide range of components that can be used to build an accordion. Here's a step-by-step guide on how to create such an accordion using Chakra UI, including code snippets for each step.

1. First, you need to install Chakra UI in your React project by running the following command in your terminal: `npm install @chakra-ui/core`.

2. Next, import the necessary components from Chakra UI that you'll be using to build the accordion. These include the `Accordion`, `AccordionItem`, `AccordionHeader`, `AccordionPanel`, and `AccordionIcon` components.

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/core";
```

3. Create a new component called "AccordionContainer" that will contain the accordion and its state. In this component, you will use the `useState` hook to create a state variable that will hold the data for the accordion sections.

```tsx
function AccordionContainer() {
  const [sections, setSections] = useState([
    { title: "Section 1", content: "Content for section 1" },
    { title: "Section 2", content: "Content for section 2" }
  ]);

  return (
    // accordion code goes here
  );
}
```

4. Use the Accordion component to create the main container for the accordion. Inside the `Accordion` component, you will use the `AccordionItem` component to create each section of the accordion. The `AccordionItem` component takes two props, `title` and `children`. `title` is used to render the title of the accordion section and `children` is used to render the content of the section.

```tsx
return (
  <Accordion>
    {sections.map((section, index) => (
      <AccordionItem key={index}>
        <AccordionHeader>
          <Box flex="1" textAlign="left">
            {section.title}
          </Box>
          <AccordionIcon />
        </AccordionHeader>
        <AccordionPanel>{section.content}</AccordionPanel>
      </AccordionItem>
    ))}
  </Accordion>
);
```

5. Inside the `AccordionItem` component, use the `AccordionHeader` and `AccordionPanel` components to create the header and content of each section respectively. The `AccordionHeader` component is used to render the title of the section, while the `AccordionPanel` component is used to render the content of the section.

6. Next, add a button or link that will allow users to add a new row to the accordion. This can be done by adding a button component with the `onClick` prop that calls a function to add a new row. You will also add a delete button or link inside each section of the accordion that allows users to delete a specific row.

```tsx
return (
  <Accordion>
    {sections.map((section, index) => (
      <AccordionItem key={index}>
        <AccordionHeader>
          <Box flex="1" textAlign="left">
            {section.title}
          </Box>
          <AccordionIcon />
          <Button onClick={() => deleteSection(index)}>Delete</Button>
        </AccordionHeader>
        <AccordionPanel>{section.content}</AccordionPanel>
      </AccordionItem>
    ))}
    <Button onClick={addSection}>Add new section</Button>
  </Accordion>
);
```

7. Finally, you will create the function that will handle the adding and deletion of rows in the accordion. The function will update the state variable that holds the data for the accordion sections by using the `setState` method.

```tsx
function addSection() {
  setSections([
    ...sections,
    { title: "New Section", content: "Content for new section" },
  ]);
}

function deleteSection(index) {
  const newSections = [...sections];
  newSections.splice(index, 1);
  setSections(newSections);
}
```

8. Now your accordion is ready to be rendered in your application, you can use the AccordionContainer component in your application and it will work as expected.

By following these steps, you should be able to create an accordion that allows users to add and delete rows in Chakra UI. Remember that the most important thing is to understand the basic concepts of the library, and to practice with the examples provided in the documentation.

## Complete Code

Here is the complete code:

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Button,
  Box,
} from "@chakra-ui/core";

function AccordionContainer() {
  const [sections, setSections] = useState([
    { title: "Section 1", content: "Content for section 1" },
    { title: "Section 2", content: "Content for section 2" },
  ]);

  function addSection() {
    setSections([
      ...sections,
      { title: "New Section", content: "Content for new section" },
    ]);
  }

  function deleteSection(index) {
    const newSections = [...sections];
    newSections.splice(index, 1);
    setSections(newSections);
  }

  return (
    <Accordion>
      {sections.map((section, index) => (
        <AccordionItem key={index}>
          <AccordionHeader>
            <Box flex="1" textAlign="left">
              {section.title}
            </Box>
            <AccordionIcon />
            <Button onClick={() => deleteSection(index)}>Delete</Button>
          </AccordionHeader>
          <AccordionPanel>{section.content}</AccordionPanel>
        </AccordionItem>
      ))}
      <Button onClick={addSection}>Add new section</Button>
    </Accordion>
  );
}

export default AccordionContainer;
```

Keep in mind that this is just one way of creating an accordion with adding and deleting functionality, you can always customize it to fit your needs. Chakra UI is a very powerful library that can be used to create beautiful and functional user interfaces, so don't be afraid to experiment with different components and styles to create something that works best for your project.
