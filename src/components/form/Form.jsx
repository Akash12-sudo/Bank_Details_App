import { useState } from "react";
import FormField from "./FormField";
import FormLabel from "./FormLabel";
import FormInput from "./FormInput";

const Form = () => {
  // state for handling user details
  const [user, setUser] = useState({
    account_holder_name: "",
    account_number: "",
    ifsc_code: "",
    bank_name: "",
    bank_city: "",
    branch_name: "",
    relationship: "",
    consent: false,
  });

  // state for checking whether form is submitted
  const [formState, setFormState] = useState(false);

  // state for getting current date
  const [date, setDate] = useState();

  // handles change in input fields
  const inputChangeHandler = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    setUser({ ...user, [id]: value });
  };

  // function for formatting the date
  const formatDateToCustomString = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  // handling form submission
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setFormState(true);

    console.log(user);

    const currentDate = new Date();
    const formattedDate = formatDateToCustomString(currentDate);
    setDate(formattedDate.toUpperCase());
  };

  console.log(date);

  return (
    <form
      className="mt-10 p-10 border border-solid border-gray-200 rounded-md shadow-sm"
      onSubmit={formSubmitHandler}
    >
      <FormField>
        <FormLabel htmlFor="account_holder_name">ACCOUNT HOLDER NAME</FormLabel>
        <FormInput
          Id="account_holder_name"
          Type="text"
          Placeholder="Account Holder Name"
          Value={user.account_holder_name}
          State={formState}
          required
          changeHandler={inputChangeHandler}
        />
      </FormField>

      <FormField>
        <FormLabel htmlFor="account_number">ACCOUNT NUMBER</FormLabel>
        <FormInput
          Id="account_number"
          Type="Number"
          Placeholder="Account Number"
          Value={user.account_number}
          State={formState}
          required
          changeHandler={inputChangeHandler}
        />
      </FormField>

      <FormField>
        <FormLabel htmlFor="ifsc_code">IFSC CODE</FormLabel>
        <FormInput
          Id="ifsc_code"
          type="text"
          Placeholder="IFSC Code"
          Value={user.ifsc_code}
          State={formState}
          required
          changeHandler={inputChangeHandler}
        />
      </FormField>

      <FormField>
        <FormLabel htmlFor="bank_name">BANK NAME</FormLabel>
        <FormInput
          Id="bank_name"
          type="text"
          Placeholder="Bank Name"
          Value={user.bank_name}
          State={formState}
          required
          changeHandler={inputChangeHandler}
        />
      </FormField>

      <FormField>
        <FormLabel htmlFor="bank_city">BANK CITY</FormLabel>
        <FormInput
          Id="bank_city"
          Type="text"
          Placeholder="Bank City"
          Value={user.bank_city}
          State={formState}
          required
          changeHandler={inputChangeHandler}
        />
      </FormField>

      <FormField>
        <FormLabel htmlFor="branch_name">BRANCH NAME</FormLabel>
        <FormInput
          Id="branch_name"
          Type="text"
          Placeholder="Branch Name"
          Value={user.branch_name}
          State={formState}
          required
          changeHandler={inputChangeHandler}
        />
      </FormField>

      <FormField>
        <FormLabel htmlFor="relationship" className="w-full font-bold text-1xl">
          RELATION WITH ACCOUNT HOLDER
        </FormLabel>
        <FormInput
          Id="relationship"
          Type="text"
          Placeholder="Relation With Account Holder"
          Value={user.relationship}
          State={formState}
          required
          changeHandler={inputChangeHandler}
        />
      </FormField>

      <div className="md:flex-row sm:flex-row xs:flex-col mt-6 w-full flex flex-row justify-between items-start">
        <label htmlFor="consent" className="w-full font-bold text-1xl">
          CONSENT
        </label>
        {formState ? (
          <>
            <div
              className="w-full flex xs:mt-5 flex-col border border-gray-200 p-3 items-start rounded-md"
              style={{ backgroundColor: "#ebfced" }}
            >
              <p className="ml-4 text-1xl text-gray-600">
                I confirm that the information given in this form is true,
                complete and accurate. I understand that in case of incorrect
                details, Exambazaar will not be responsible for any loss of pay.
              </p>
              <p className="ml-4 mt-5 font-bold text-1xl capitalize">
                FILLED ON {date}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="w-full flex xs:mt-5 flex-row border border-gray-200 p-3 items-start rounded-md">
              <input
                id="consent"
                type="checkbox"
                required
                className="w-6 h-6 mt-2 bg-gray-100 border-gray-300 rounded-md"
              />

              <p className="ml-4 text-1xl text-gray-600">
                I confirm that the information given in this form is true,
                complete and accurate. I understand that in case of incorrect
                details, Exambazaar will not be responsible for any loss of pay.
              </p>
            </div>
          </>
        )}
      </div>
      <div className="mt-4 w-full flex flex-row justify-end pr-10">
        <button
          type="submit"
          className="px-4 py-2 bg-green-700 text-white text-1xl rounded-md"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Form;
