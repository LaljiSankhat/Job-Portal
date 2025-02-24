import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable"

const CreateJob = () => {
  const [selectedOptions, setSelectedOptions] = useState(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOptions;
    const uri = import.meta.env.MODE === 'developement' ? "http://localhost:3000" : "";
    // console.log(data)
    fetch(`${uri}/post-job`, {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      if(result.acknowledged === true){
        alert("Job posted successfully")
      }
      reset()
    })
  };

  const options = [
    {value: "JavaScript", label: "JavaScript"},
    {value: "C++", label: "C++"},
    {value: "HTML", label: "HTML"},
    {value: "CSS", label: "CSS"},
    {value: "React", label: "React"},
    {value: "Java", label: "Java"},
    {value: "Node.js", label: "Node.js"},
    {value: "MongoDB", label: "MongoDB"},
    {value: "Redux", label: "Redux"},
  ]

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* First row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Job Title</label>
              <input
                type="text"
                defaultValue={"Web Developer"}
                {...register("jobTitle")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 
                focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Company Name</label>
              <input
                type="text"
                placeholder="Ex: Microsoft"
                {...register("companyName")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 
                focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* Second row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Minimum Salary</label>
              <input
                type="text"
                placeholder="$100K"
                {...register("minPrice")}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Maximu Salary</label>
              <input
                type="text"
                placeholder="$100K"
                {...register("maxPrice")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* Third row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Salary Type</label>
              <select {...register("salaryType")} className="create-job-input">
                <option value="">Choose your Salary Type</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Job Location</label>
              <input
                type="text"
                placeholder="Ex: New York"
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* Fourth row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Job Posting Date</label>
              <input
                type="date"
                placeholder="Ex: 2024-02-21"
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Experience level</label>
              <select {...register("experienceLevel")} className="create-job-input">
                <option value="">Choose your Experience level</option>
                <option value="noExperience">noExperience</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>
          </div>

          {/* Fifth row */}
          <div>
            <label className="block mb-2 text-lg ">Required Skill Sets:</label>
            <CreatableSelect 
            defaultValue={selectedOptions}
            options={options}
            onChange={setSelectedOptions}
            isMulti
            className="create-job-input py-4"
            />
          </div>

          {/* Sixth row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Company Logo</label>
              <input
                type="url"
                placeholder="Paste your company logo url: https://weshare.com/img"
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Employment Type</label>
              <select {...register("employmentType")} className="create-job-input">
                <option value="">Choose your Employment Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          {/* 7th row */}
          <div className="w-full">
            <label className="block mb-2 text-lg ">Job Description</label>
            <textarea {...register("description")} className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700"
            rows={6}
            defaultValue={""}
            placeholder="Job Description" />
          </div>

          {/* 8th row */}
          <div className="w-full">
            <label className="block mb-2 text-lg ">Job Posted By</label>
            <input
                type="email"
                placeholder="abc@mail.com"
                {...register("postedBy")}
                className="create-job-input"
              />
          </div>

          <input className="block mt-12 bg-blue text-white text-semibold px-8 py-2 rounded-sm cursor-pointer" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default CreateJob;

// 37.450
