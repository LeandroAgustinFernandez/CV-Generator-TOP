import {Input} from "./Input";
import Label from "./Label";

import React from 'react'

const Experience = ({experienceInfo,add,remove,changeInput}) => {
  return (
    <>
        <h3>Experience</h3>
        {experienceInfo.map((experience) => (
          <div key={experience.id}>
            <form id={experience.id}>
              <div className="form-group">
                <Label value="company"/>
                <Input change={changeInput} value={experience.company} type="text" name="company"/>
              </div>
              <div className="form-group">
                <Label value="city"/>
                <Input change={changeInput} value={experience.city} type="text" name="city"/>
              </div>
              <div className="form-group">
                <Label value="position"/>
                <Input change={changeInput} value={experience.position} type="text" name="position"/>
              </div>
              <div className="form-group">
                <Label value="from"/>
                <Input change={changeInput} value={experience.from} type="text" name="from"/>
              </div>
              <div className="form-group">
                <Label value="to"/>
                <Input change={changeInput} value={experience.to} type="text" name="to"/>
              </div>
            </form>
            <button
              className="btn btn-dark w-100 my-3"
              onClick={remove}
              id={experience.id}
            >
              Delete
            </button>
          </div>
        ))}
        <button className="btn btn-dark w-100 my-3" onClick={add}>
          Add
        </button>
      </>
  )
}



export default Experience;
