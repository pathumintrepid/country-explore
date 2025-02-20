import { it, expect, describe } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import BackToContries from "./BackToContries.vue";
describe("BackToContries", () => {
  it("should have a link with text '← Back to Countries'", async () => {
    const component = await mountSuspended(BackToContries);
    const link = component.find("a");
    expect(link).toBeTruthy();
    expect(link.text()).toBe("← Back to Countries");
  });
});
