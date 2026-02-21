import Navbar from "../components/Navbar";

export default function Dashboard(){
  return(
    <>
      <Navbar/>
      <div className="container mt-5 text-center">
        <h1>Welcome to Estimate Management System</h1>
        <p>Create and manage quotations easily</p>
      </div>
    </>
  )
}
