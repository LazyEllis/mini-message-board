import { vi, test, expect } from "vitest";
import { isToday, isYesterday, format } from "date-fns";
import formatTimestamp from "./formatTimestamp";

vi.mock("date-fns", async () => {
  const originalModule = await vi.importActual("date-fns");
  return {
    ...originalModule,
    isToday: vi.fn(),
    isYesterday: vi.fn(),
    format: vi.fn(),
  };
});

const setup = (today = false, yesterday = false) => {
  vi.resetAllMocks();

  isToday.mockReturnValue(today);
  isYesterday.mockReturnValue(yesterday);
  format.mockImplementation((date, string) =>
    string === "h:m a" ? "12:00 PM" : "01/01/2025",
  );

  return { date: new Date() };
};

test("formats as time-only when the date is today", () => {
  const { date } = setup(true, false);

  expect(formatTimestamp(date)).toBe("12:00 PM");
  expect(format).toHaveBeenCalledExactlyOnceWith(date, "h:m a");
});

test("formats as 'Yesterday at [time]' when the date is yesterday", () => {
  const { date } = setup(false, true);

  expect(formatTimestamp(date)).toBe("Yesterday at 12:00 PM");
  expect(format).toHaveBeenCalledExactlyOnceWith(date, "h:m a");
});

test("formats as 'd/M/y h:m a' when date is neither today nor yesterday", () => {
  const { date } = setup();

  expect(formatTimestamp(date)).toBe("01/01/2025 12:00 PM");
  expect(format).toHaveBeenCalledTimes(2);
  expect(format).toHaveBeenCalledWith(date, "d/M/y");
  expect(format).toHaveBeenCalledWith(date, "h:m a");
});
