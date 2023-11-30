import { render, screen } from "@testing-library/svelte"

import { expect, it } from "vitest";
import Page from "./Component.svelte";

/**
 * @vitest-environment jsdom
 */
it('should work', () => {
    render(Page);
    expect(screen.getByDisplayValue(12)).toBeInTheDocument()

})