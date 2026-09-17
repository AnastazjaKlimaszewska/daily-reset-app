import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import SettingsPage from "../app/settings/page";

vi.mock("../lib/storage", () => ({
  clearDailyResetData: vi.fn(),
}));

import { clearDailyResetData } from "../lib/storage";

const mockedClearDailyResetData = vi.mocked(clearDailyResetData);

describe("Settings page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockedClearDailyResetData.mockResolvedValue(undefined);
  });

  it("renders storage information", () => {
    render(<SettingsPage />);

    expect(document.body.textContent).toContain("Local data");
    expect(document.body.textContent).toContain("IndexedDB");
    expect(document.body.textContent).toContain("Cloud sync");
  });

  it("does not clear data when confirmation is cancelled", async () => {
    vi.spyOn(window, "confirm").mockReturnValue(false);

    render(<SettingsPage />);

    fireEvent.click(
      screen.getByRole("button", {
        name: "Clear local data",
      })
    );

    expect(mockedClearDailyResetData).not.toHaveBeenCalled();
  });

  it("clears local data after confirmation", async () => {
    vi.spyOn(window, "confirm").mockReturnValue(true);

    render(<SettingsPage />);

    fireEvent.click(
      screen.getByRole("button", {
        name: "Clear local data",
      })
    );

    await waitFor(() => {
      expect(mockedClearDailyResetData).toHaveBeenCalledTimes(1);
    });

    expect(document.body.textContent).toContain("Local data cleared.");
  });
});