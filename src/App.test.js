import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "../src/components/pages/BookingForm";

test("Renders the BookingForm", () => {
	render(<BookingForm availableTimes={[]} updateTimes={() => {}} />);

  expect(screen.getByLabelText("Your name")).toBeInTheDocument();
	expect(screen.getByLabelText("Choose date")).toBeInTheDocument();
	expect(screen.getByLabelText("Choose time")).toBeInTheDocument();
	expect(screen.getByLabelText("Number of guests")).toBeInTheDocument();
	expect(screen.getByLabelText("Occasion")).toBeInTheDocument();	
	expect(screen.getByText("Your email")).toBeInTheDocument();
});


  fireEvent.change(screen.getByLabelText("Your name"), {
		target: { value: "John Doe" },
	});
	fireEvent.change(screen.getByLabelText("Choose date"), {
		target: { value: "2023-07-27" },
	});
	fireEvent.change(screen.getByLabelText("Choose time"), {
		target: { value: "20:00" },
	});
	fireEvent.change(screen.getByLabelText("Number of guests"), {
		target: { value: "3" },
	});
	fireEvent.change(screen.getByLabelText("Occasion"), {
		target: { value: "Birthday" },
	});
	


	fireEvent.click(screen.getByText("Make your reservation"));

	test("updates the available times when the date is changed", () => {
	const timesUpdated = jest.fn();
	render(
		<BookingForm
			availableTimes={[]}
			updateTimes={timesUpdated}
			submitForm={() => {}}
		/>
	);


	fireEvent.change(screen.getByLabelText("Date"), {
		target: { value: "2023-06-01" },
	});


	expect(timesUpdated).toHaveBeenCalledWith(new Date("2023-06-01"));
});

test("disables the submit button when the name is too short", () => {
	render(<BookingForm availableTimes={[]} updateTimes={() => {}} />);


  fireEvent.change(screen.getByLabelText("Your name"), {
		target: { value: "John" },
  }); 
  fireEvent.change(screen.getByLabelText("Choose date"), {
		target: { value: "07-27-2023" },
	});
	
	fireEvent.change(screen.getByLabelText("Choose time"), {
		target: { value: "22:00" },
	});
	fireEvent.change(screen.getByLabelText("Number of guests"), {
		target: { value: "3" },
	});
	fireEvent.change(screen.getByLabelText("Occasion"), {
		target: { value: "Birthday" },
	});
  fireEvent.change(screen.getByLabelText("Your email"), {
		target: { value: "some_email@gmail.com" },
	});

  expect(screen.getByText("Make your reservation")).toBeDisabled();
});
