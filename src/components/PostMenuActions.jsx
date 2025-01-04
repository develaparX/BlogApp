const PostMenuActions = () => {
  return (
    <div>
      <h1 className="mt-8 mb-4 text-sm font-medium">Actions</h1>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer hover:bg-slate-400 hover:rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="20px"
          height="20px"
        >
          <path
            d="M12 4C10.3 4 9 5.3 9 7v34l15-9 15 9V7c0-1.7-1.3-3-3-3H12z"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
        <span>Save this post</span>
      </div>
      <div className="flex items-center gap-2 py-2 text-sm cursor-pointer hover:bg-slate-400 hover:rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="red"
          width="20px"
          height="20px"
        >
          <path
            d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
            stroke="red"
          />
        </svg>
        <span>Delete this post</span>
      </div>
    </div>
  );
};

export default PostMenuActions;
