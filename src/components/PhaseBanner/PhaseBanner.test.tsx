import { test, expect } from 'vitest';
import { render } from '@testing-library/react';
import PhaseBanner from './PhaseBanner';

const text = 'This is a new service. Your feedback will help us to improve it.';
const defaultText = 'This is a new service';

test('phase banner renders correctly', () => {
    render(
        <PhaseBanner>
            {text}
        </PhaseBanner>
    );

    const phaseBanner = document.querySelector('.ds_phase-banner');
    const phaseBannerContent = phaseBanner?.querySelector('.ds_phase-banner__content');
    const phaseBannerWrapper = phaseBannerContent?.parentElement;
    const phaseBannerText = phaseBannerContent?.querySelector('.ds_phase-banner__text');

    expect(phaseBanner).toBeInTheDocument();
    expect(phaseBanner?.tagName).toEqual('DIV');
    expect(phaseBannerWrapper).toHaveClass('ds_wrapper');
    expect(phaseBannerWrapper?.tagName).toEqual('DIV');
    expect(phaseBannerContent?.tagName).toEqual('P');
    expect(phaseBannerText?.tagName).toEqual('SPAN');
    expect(phaseBannerText?.textContent).toEqual(text);
});

test('phase banner with default text', () => {
    render(
        <PhaseBanner>
        </PhaseBanner>
    );

    const phaseBanner = document.querySelector('.ds_phase-banner');
    const phaseBannerContent = phaseBanner?.querySelector('.ds_phase-banner__content');
    const phaseBannerText = phaseBannerContent?.querySelector('.ds_phase-banner__text');

    expect(phaseBannerText?.textContent).toEqual(defaultText);
});

test('phase banner with phase tag', () => {
    const phase = 'Beta';

    render(
        <PhaseBanner phaseName={phase}></PhaseBanner>
    );

    const phaseBanner = document.querySelector('.ds_phase-banner');
    const phaseBannerTag = phaseBanner?.querySelector('.ds_phase-banner__tag');

    expect(phaseBannerTag).toBeInTheDocument();
    expect(phaseBannerTag?.tagName).toEqual('SPAN');
    expect(phaseBannerTag).toHaveClass('ds_tag', 'ds_phase-banner__tag');
    expect(phaseBannerTag?.textContent).toEqual(phase);
});

test('passing additional props', () => {
    render(
        <PhaseBanner data-test="foo">
            This is a new service. Your <a href="#feedback">feedback</a> will help us to improve it.
        </PhaseBanner>
    )

    const phaseBanner = document.querySelector('.ds_phase-banner') as HTMLElement;
    expect(phaseBanner?.dataset.test).toEqual('foo');
});

test('passing additional CSS classes', () => {
    render(
        <PhaseBanner className="foo">
            This is a new service. Your <a href="#feedback">feedback</a> will help us to improve it.
        </PhaseBanner>
    )

    const phaseBanner = document.querySelector('.ds_phase-banner');
    expect(phaseBanner).toHaveClass('foo', 'ds_phase-banner');
});
