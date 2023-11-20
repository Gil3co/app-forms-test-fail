import { render, screen } from "@testing-library/svelte"

import { expect, it } from "vitest";
import Page from "./Component.svelte";

/**
 * @vitest-environment jsdom
 */
it('should work', () => {
    render(Page);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    expect(screen.getByText(12)).toBeInTheDocument()
})