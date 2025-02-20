import { describe, it, expect } from "vitest";

import { mountSuspended } from "@nuxt/test-utils/runtime";
import Base from "./Base.vue";

describe("Base.vue", () => {
  it("renders the main container with correct classes", async () => {
    const component = await mountSuspended(Base);
    const rootDiv = component.find("div");
    expect(rootDiv).toBeTruthy();
    expect(rootDiv.classes()).toContain("bg-gray-100");
    expect(rootDiv.classes()).toContain("min-h-screen");
    expect(rootDiv.classes()).toContain("py-12");
    expect(rootDiv.classes()).toContain("px-4");
    expect(rootDiv.classes()).toContain("sm:px-6");
    expect(rootDiv.classes()).toContain("lg:px-8");
  });

  it("renders secondary container with correct classes", async () => {
    const component = await mountSuspended(Base);
    const childDiv = component.find("div.mx-auto");

    console.log(childDiv.classes());
    expect(childDiv).toBeTruthy();
    expect(childDiv.classes()).toContain("max-w-4xl");
  });

  it("renders with slots", async () => {
    const component = await mountSuspended(Base, {
      slots: {
        default: "<div>Test</div>",
      },
    });
    const div = component.find("div");
    expect(div.text()).toBe("Test");
  });
});
