export default function CheckoutForm() {
  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
          Shipping Address
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 dark:text-white mb-1">
              First Name *
            </label>
            <input
              type="text"
              id="first_name"
              className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
              placeholder="Enter first name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-white mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
              placeholder="Enter last name"
            />
          </div>
        </div>

        <div className="mt-4">
          <label
            for="address"
            className="block text-gray-700 dark:text-white mb-1"
          >
            Address *
          </label>
          <textarea
            type="text"
            id="address"
            className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
            placeholder="Enter address"
            required
          />
        </div>

        <div className="mt-4">
          <label
            for="city"
            className="block text-gray-700 dark:text-white mb-1"
          >
            City *
          </label>
          <input
            type="text"
            id="city"
            className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
            placeholder="Enter city"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label
              for="state"
              className="block text-gray-700 dark:text-white mb-1"
            >
              State *
            </label>
            <input
              type="text"
              id="state"
              className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
              placeholder="Enter state"
              required
            />
          </div>
          <div>
            <label
              for="zip"
              className="block text-gray-700 dark:text-white mb-1"
            >
              ZIP Code *
            </label>
            <input
              type="text"
              id="zip"
              className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
              placeholder="Enter zip code"
              required
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
          Payment Information
        </h2>
        <div className="mt-4">
          <label
            for="card_number"
            className="block text-gray-700 dark:text-white mb-1"
          >
            Card Number
          </label>
          <input
            type="number"
            id="card_number"
            className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label
              for="exp_date"
              className="block text-gray-700 dark:text-white mb-1"
            >
              Expiration Date
            </label>
            <input
              type="text"
              id="exp_date"
              className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
            />
          </div>
          <div>
            <label
              for="cvv"
              className="block text-gray-700 dark:text-white mb-1"
            >
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
