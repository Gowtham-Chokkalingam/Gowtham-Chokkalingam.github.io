import React, { useEffect, useState } from "react";
import { FiSend } from "react-icons/fi";
import { TbMessage } from "react-icons/tb";
import { IoIosPerson } from "react-icons/io";
import { TiMessageTyping } from "react-icons/ti";

import SkeletonContact from "./Skeleton/SkeletonContact";
import { MdOutlineMail } from "react-icons/md";
// import { AlertTitle, Snackbar } from "@mui/material";
// import MuiAlert from "@mui/material/Alert";
// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

let initState = {
  name: "",
  email: "",
  message: "",
};
const Contact = () => {
  // alert mui

  const [open, setOpen] = React.useState(false);
  const [fill, setFill] = React.useState(false);

  // const handleClickMui = () => {
  //   setOpen(true);
  // };

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };

  // /jkjkjkl
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState(initState);

  const send = Boolean(data.email) && Boolean(data.name) && Boolean(data.message);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  // form submit

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("handleClick:");
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if (!send) {
      alert("Please Fill The All Input Fields");
      // setFill(true);

      // setTimeout(() => {
      //   setFill(false);
      // }, 2000);
    }
    // }else if ( data.name.toLowerCase() === "anushka" || data.message.includes("darling")|| data.message.includes("baby")|| data.message.includes("love")|| data.message.includes("miss")) {
    //   alert(`Hi ${data.name.toUpperCase()} You Are Blocked By Gowtham`);
    // }
    else {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });
      fetch("https://getform.io/f/3fe863c5-56a1-4839-9e6f-070caf1a6c86", {
        method: "POST",
        body: formData,
      }).then(() => {
        alert(` ${data.name} Message Has Been Sent Successfully`);
        setData({ name: "", email: "", message: "" });
        // handleClickMui();
      });
      //
    }
  };
  return loading ? (
    <SkeletonContact></SkeletonContact>
  ) : (
    <div name="contact" className="w-full h-max py-20 bg-gradient-to-b to-black from-gray-900 text-white ">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 hover:border-blue-500 duration-300">
            <TbMessage className="inline mb-2 mr-2 animate-wiggle text-blue-400"></TbMessage>Contact
          </p>
          <p className="py-6">Get In Touch</p>
          {/* {fill && (
            <Alert className="w-[50%] mx-auto" severity="error">
              <AlertTitle>Error Alert</AlertTitle>
              Fill All Input Fields — <strong>check it out!</strong>
            </Alert>
          )} */}
        </div>

        <div className="flex justify-center items-center">
          {/* action="https://getform.io/f/3fe863c5-56a1-4839-9e6f-070caf1a6c86" */}
          {/* <form action="https://getform.io/f/3fe863c5-56a1-4839-9e6f-070caf1a6c86" method="POST" className="flex flex-col w-full md:w-1/2"> */}
          <form onSubmit={formSubmit} className="flex flex-col w-full md:w-1/2">
            <div className="w-full flex items-center gap-4">
              <IoIosPerson size={36} className="w-[10%] animate-pulse"></IoIosPerson>

              <input
                type="text"
                onChange={handleChange}
                name="name"
                value={data.name}
                placeholder="Enter Your Name"
                className=" w-[90%] p-2 bg-transparent border-2 rounded-md text-white focus:outline-none hover:border-blue-600 hover:scale-105 duration-150 "
              ></input>
            </div>

            <div className="w-full flex items-center gap-4">
              <MdOutlineMail size={36} className="w-[10%] animate-pulse"></MdOutlineMail>

              <input
                type="text"
                name="email"
                onChange={handleChange}
                value={data.email}
                placeholder="Enter Your Email"
                className=" w-[90%] p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none hover:border-blue-600 hover:scale-105 duration-150 "
              ></input>
            </div>

            <div className="w-full flex items-start gap-4">
              <TiMessageTyping size={36} className="w-[10%] animate-pulse"></TiMessageTyping>

              <textarea
                name="message"
                onChange={handleChange}
                value={data.message}
                rows="4"
                placeholder="Enter Your Message...."
                className=" w-[90%] p-2 bg-transparent border-2 rounded-md text-white focus:outline-none hover:border-blue-600 hover:scale-105 duration-150 "
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white group bg-gradient-to-b from-cyan-500 to to-blue-500 px-6 py-3 my-8 mx-auto flex gap-4  items-center rounded-md hover:scale-110 duration-300 "
            >
              Send
              <span className="group-hover:rotate-45 duration-300">
                <FiSend className="animate-wigglelow"></FiSend>
              </span>
            </button>
            {/* <div className=" w-[100%]  ">
              <Snackbar className="ml-80" open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: "100%", margin: "auto" }}>
                  {` Message Sent Successfully!`}
                </Alert>
              </Snackbar> */}

            {/* <Alert severity="error">This is an error message!</Alert> */}
            {/* </div> */}

            {/* <Snackbar className="ml-80" open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="error" sx={{ width: "100%", margin: "auto" }}>
              Please Fill All Input Fields!
              </Alert>
            </Snackbar> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
