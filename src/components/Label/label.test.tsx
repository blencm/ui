import React from 'react';
import { render, screen } from '@testing-library/react';
import { Label } from './label';
import "@testing-library/jest-dom";

describe('Label', () => {
  it('renders the Label component with text', () => {
    render(<Label htmlFor="input-id">Test Label</Label>);

    // Verificar que el texto del label está presente
    expect(screen.getByText('Test Label')).toBeInTheDocument();

    // Verificar que el atributo htmlFor está configurado correctamente
    expect(screen.getByText('Test Label')).toHaveAttribute('for', 'input-id');
  });

  it('applies custom class names', () => {
    render(<Label className="custom-class">Custom Label</Label>);

    // Verificar que la clase personalizada está aplicada
    expect(screen.getByText('Custom Label')).toHaveClass('custom-class');
  });

  it('handles disabled state', () => {
    render(
      <div>
        <input id="input-id" disabled className="peer" />
        <Label htmlFor="input-id">Disabled Label</Label>
      </div>
    );

    // Verificar que el label tiene las clases de estado deshabilitado
    expect(screen.getByText('Disabled Label')).toHaveClass(
      'peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
    );
  });
});