import React from 'react';
import { ComponentParams, ComponentRendering, TextField, Text } from '@sitecore-jss/sitecore-jss-nextjs';

interface ProvaProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: {
    title: TextField;
    labelLogin: TextField;
  };
}

export const Default = (props: ProvaProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`component ${props.params.styles}`} id={id ? id : undefined}>
      <div className="component-content">
        <p>Prova Component
         <Text tag="h2" className="contentTitle" field={props.fields.title} />
         <Text field={props.fields.labelLogin} />
        </p>
      </div>
    </div>
  );
};
