import { it, expect, describe } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";

import SeeMore from "./SeeMore.vue";
describe("SeeMore", () => {
  it('should have a button with text "See More 🌍"', async () => {
    const component = await mountSuspended(SeeMore);
    const button = component.find("button");
    expect(button).toBeTruthy();
    expect(button.text()).toBe("See More 🌍");
  });
});
