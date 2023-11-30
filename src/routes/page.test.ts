import { render, screen } from "@testing-library/svelte"

import { expect, it, vi } from "vitest";
import Page from "./Component.svelte";

vi.mock('$app/forms', () => {
    return {};
});

it('should work', () => {
    render(Page);
    expect(screen.getByDisplayValue(12)).toBeInTheDocument()

})