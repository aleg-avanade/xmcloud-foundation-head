import React from 'react';
import {
  ComponentParams,
  ComponentRendering,
  Field,
  Text,
  RichText,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface TestProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: {
    title: Field<string>;
    labelLogin: Field<string>;
  };
}

export const Default = (props: TestProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`component ${props.params.styles}`} id={id ? id : undefined}>
      <div className="component-content">
        <p>Test Component</p>
        <p>
          <Text field={props.fields.title} />
        </p>
        <p>
          <RichText field={props.fields.labelLogin} />
        </p>
      </div>
    </div>
  );
};
