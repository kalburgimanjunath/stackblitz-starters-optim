import { faker } from '@faker-js/faker';
export default function SearchJobs() {
  const randomName = faker.person.fullName();
  const Companys = (numrows = 10) => {
    return [...Array(1000)].map((x, i) => (
      <div className="border-2 m-2 p-5 shadow-lg">
        <div key={i} className="font-bold">
          {faker.person.jobArea()}
        </div>
        at
        <div>{faker.company.name()}</div>
        <div>{faker.person.jobType()}</div>
        <div>{faker.person.jobDescriptor()}</div>
      </div>
    ));
  };
  const Individual = (numrows = 10) => {
    return [...Array(1)].map((x, i) => (
      <div className="border-2 m-2 p-5 shadow-lg">
        <div>Hello world {faker.company.name()}</div>
        <div>{faker.person.jobType()}</div>
        <div>{faker.person.jobDescriptor()}</div>
      </div>
    ));
  };
  return (
    <div>
      <div className="flex m-2 p-4 justify-content-space-between w-full align-items-baseline">
        <input
          type="text"
          placeholder="Search keywords,job title,description"
          className="p-2 w-full border-2 border-color-gray-100 hover:border-color-gray-100 focus: border-color-gray-100 focus-visible:border-color-gray-100 rounded-lg"
        />
        <input
          type="text"
          placeholder="Location"
          className="p-2 w-full border-2 border-color-gray-100 hover:border-color-gray-100 focus: border-color-gray-100 focus-visible: border-color-gray-100 rounded-lg ml-2 mr-2"
        />
        <button
          className="bg-green-600 rounded-lg p-2 w-full text-white"
          type="submit"
        >
          Search Jobs
        </button>
      </div>
      <div className="flex grid grid-cols-auto md:grid-cols-2">
        <div>
          <Companys />
        </div>
        <div className="">
          <Individual />
          <h4>description</h4>
          <h4>expertise</h4>
          <h4>about company</h4>
        </div>
      </div>
    </div>
  );
}
