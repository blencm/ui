import React from 'react';
import { render, screen } from '@testing-library/react';
import { Label } from './label';
import "@testing-library/jest-dom";

describe('Label', () => {
  it('renders the Label component with text', () => {
    render(<Label htmlFor="input-id">Test Label</Label>);

    // Verify that the label text is present.
    expect(screen.getByText('Test Label')).toBeInTheDocument();

    // Verify that htmlFor points to the input.
    expect(screen.getByText('Test Label')).toHaveAttribute('for', 'input-id');
  });

  it('applies custom class names', () => {
    render(<Label className="custom-class">Custom Label</Label>);

    // Verify that the custom class is applied.
    expect(screen.getByText('Custom Label')).toHaveClass('custom-class');
  });

  it('handles disabled state', () => {
    render(
      <div>
        <input id="input-id" disabled className="peer" />
        <Label htmlFor="input-id">Disabled Label</Label>
      </div>
    );

    // Verify that the label has the disabled state classes.
    expect(screen.getByText('Disabled Label')).toHaveClass(
      'peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
    );
  });
});
