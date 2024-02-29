import React, { useReducer, useState } from "react";
import "./Add.scss";
import { INITIAL_STATE, gigReducer } from "../../reducers/gigReducer";
import { upload } from "../../utils/upload";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

function Add() {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const handleUpload = async (e) => {
    setUploading(true);

    try {
      const cover = await upload(singleFile);
      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.post(`/gigs`, gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
      navigate("/myGigs");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    console.log("state", state);
 
  };

  console.log("stateeee", state);

  return (
    <div className="add">
      <div className="container">
        <h3>Add New Gigs</h3>

        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="e.g I will do something I'm really good at'"
              name="title"
              onChange={handleChange}
            />
            <label htmlFor="">Category</label>
            <select name="cat" id="cat" onChange={handleChange}>
              <option value="ai_artists">AI Artists</option>
              <option value="logo_design">Logo Design</option>
              <option value="wordpress">Wordpress</option>
              <option value="voice_over">Voice Over</option>
            </select>
            <div className="images">
              <div className="imagesInputs">
                <label htmlFor="">Cover Image</label>
                <input
                  type="file"
                  onChange={(e) => setSingleFile(e.target.files[0])}
                />
                <label htmlFor="">Upload Images</label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
              <button className="uploadButton" onClick={handleUpload}>
                {uploading ? "uploading" : "Upload"}
              </button>
            </div>

            <label htmlFor="">Description</label>
            <textarea
              name="desc"
              id="desc"
              cols="30"
              rows="16"
              placeholder="Brief descriptions to introduce your service to customers"
              onChange={handleChange}
            ></textarea>
            <button onClick={handleSubmit}>Create</button>
          </div>

          <div className="right">
            <label htmlFor="">Service Title</label>
            <input
              type="text"
              name="shortTitle"
              placeholder="e.g One-page web design"
              onChange={handleChange}
            />
            <label htmlFor="">Short Description</label>
            <textarea
              name="shortDesc"
              id="shortDesc"
              cols="30"
              rows="10"
              placeholder="Short description of your service"
              onChange={handleChange}
            ></textarea>
            <label htmlFor="">Delivery Time(e.g 3 days)</label>
            <input
              type="number"
              name="deliveryTime"
              onChange={handleChange}
              min={1}
            />
            <label htmlFor="">Revision Number</label>
            <input
              type="number"
              name="revisionNumber"
              min={1}
              onChange={handleChange}
            />
            <label htmlFor="">Add Features</label>
            <form action="" className="addFeatures" onSubmit={handleFeature}>
              <input type="text" placeholder="e.g page design " />
              <button type="submit" className="uploadButton">
                add
              </button>
            </form>

            <div className="addedFeatures">
              {state?.features?.map((f) => (
                <div className="item" key={f}>
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_FEATURE", payload: f })
                    }
                  >
                    {f} <span>X</span>{" "}
                  </button>
                </div>
              ))}
            </div>

            <label htmlFor="">Price</label>
            <input type="number" name="price" onClick={handleChange} min={1} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
