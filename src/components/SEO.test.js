import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SEO from './SEO';

describe('SEO component', () => {
  it('adds an llms.txt alternate link for AI crawlers', () => {
    render(
      <MemoryRouter>
        <SEO title="Test title" description="Test description" keywords="test, seo" />
      </MemoryRouter>
    );

    const llmsLink = document.querySelector('link[rel="alternate"][href="https://www.ohanatherapies.com/llms.txt"]');
    expect(llmsLink).not.toBeNull();
  });
});
