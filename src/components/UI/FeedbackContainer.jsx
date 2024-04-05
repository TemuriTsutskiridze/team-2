/* eslint-disable */
import {useNavigate} from 'react-router-dom'
// Import SVG files
import upArrow from "/assets/shared/icon-arrow-up.svg";
import commentsSvg from "/assets/shared/icon-comments.svg";

// User Feedback Container Component
function FeedbackContainer({
  id,
  title,
  description,
  category,
  upvotes,
  comments,
  status,
  isRoadMap = false,
}) {
  const navigate = useNavigate();
  // Ensure comments array is initialized
  const allComments = comments || [];

  // Calculate total length of comments and replies
  const totalLength = allComments.reduce((acc, comment) => {
    if (comment.replies) {
      return acc + comment?.replies.length;
    } else {
      return acc + comments?.length;
    }
  }, 0);

  // Get Status Colors
  const getColor =
    status?.toLowerCase() === "planned"
      ? "bg-[#F49F85]"
      : status?.toLowerCase() === "in-progress"
      ? "bg-[#AD1FEA]"
      : "bg-[#62BCFA]";
  return (
    <div
      className={`flex flex-col gap-[20px] bg-white rounded-[10px] p-[24px] md:p-[28px] lg:px-[32px] relative`}
    >
      {/* User Feedback Container */}

      {/* If Roadmap Page */}
      {isRoadMap && status?.toLowerCase() !== "suggestion" && (
        <div className="status flex items-center">
          <div
            className={`${getColor} absolute w-full h-2 left-0 top-0 rounded-t-full`}
          />
          <div className={`w-2 h-2 rounded-full ${getColor}`} />
          <div className="pl-3 text-[#647196] text-[.8125rem]">{status}</div>
        </div>
      )}

      <div className="justify-between items-center md:flex md:flex-row">
        <div className="flex gap-[40px]">
          {/* Upvote button */}

          <button className="hidden md:flex flex-col items-center gap-[10px] bg-[#F2F4FE] px-[13px] py-[6px] rounded-[10px] h-fit">
            <img src={upArrow} alt="up arrow" />
            <span className="text-[.8125rem] text-[#3A4374] font-bold">
              {upvotes}
            </span>
          </button>
          {/* Feedback details and Redirect to edit page*/}
          <div className='cursor-pointer' onClick={()=>{navigate(`/edit-feedback/${id}`)}}>
            <h1 className="text-[#3A4374] text-[.8125rem]">{title}</h1>
            <p>{description}</p>
            <button className="bg-[#F2F4FE] text-[#4661E6] px-[13px] py-[6px] rounded-[10px] mb-[14px]">
              {category}
            </button>
          </div>
        </div>

        {/* Comments and upvote button for mobile */}
        <div className="md:px-5 flex justify-between">
          <button className="flex items-center gap-[10px] bg-[#F2F4FE] px-[13px] py-[6px] rounded-[10px] h-fit md:hidden">
            <img src={upArrow} alt="up arrow" />
            <span className="text-[.8125rem] text-[#3A4374] font-bold">
              {upvotes}
            </span>
          </button>
          {/* Comments count */}
          <div className="flex items-center gap-2">
            <img src={commentsSvg} alt="comments" />
            <span>{totalLength}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackContainer;