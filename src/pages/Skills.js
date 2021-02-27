import React from 'react'

function Skills() {
    return (
       <div className="skill-page">
           <div className="skill-container">
               <div className="languages">
                  <h1>Technologies   <span className="title-line"></span></h1>
                </div>
                  <div className="language-icons">
                      <div className="icon-box">
                      <svg viewBox="0 0 128 128">
                        <path fill="#D91404" d="M82.518 54.655c-12.92 8.326-25.722 16.577-38.862 25.043 19.678 2.687 39.005 5.325 58.715 8.016-6.714-11.181-13.256-22.074-19.853-33.059zM107.927 17.812c-1.735 2.604-3.473 5.207-5.205 7.813-5.95 8.951-11.898 17.901-17.841 26.855-.331.5-.76.896-.294 1.664 5.744 9.483 11.441 18.996 17.152 28.498.901 1.501 1.813 2.996 2.979 4.436l3.463-69.191-.254-.075zM29.529 47.38c.269.255.94.402 1.251.249 5.509-2.708 11.053-5.355 16.442-8.286 1.756-.954 3.106-2.667 4.621-4.055 5.013-4.597 10.017-9.204 15.021-13.812.307-.283.668-.556.852-.913 1.797-3.513 3.562-7.042 5.391-10.675-2.181-.817-4.248-1.62-6.34-2.35-.284-.099-.73.098-1.04.27-4.843 2.706-9.777 5.267-14.467 8.218-2.347 1.476-4.259 3.651-6.337 5.547-3.347 3.056-6.692 6.119-9.992 9.229-.876.825-1.674 1.768-2.355 2.76-2.258 3.286-4.446 6.619-6.737 10.048 1.282 1.326 2.445 2.592 3.69 3.77zM49.662 42.887c-2.739 11.577-5.465 23.088-8.279 34.978 13.199-8.504 26.093-16.812 38.901-25.065-10.193-3.3-20.354-6.589-30.622-9.913zM71.499 23.446l11.22 27.292c7.324-11.001 14.502-21.785 21.843-32.815-11.151 1.863-22.036 3.681-33.063 5.523zM50.122 40.519c10.042 3.261 19.885 6.456 30.012 9.743-3.761-9.163-7.393-18.005-11.101-27.035l-18.911 17.292zM29.944 54.131l-10.504 25.109c6.731-.199 13.257-.392 20.005-.591-3.168-8.176-6.274-16.192-9.501-24.518zM39.683 72.826l.248-.054c2.401-9.988 4.838-19.907 7.291-30.284-5.47 2.842-10.688 5.554-16.05 8.341 2.735 7.112 5.653 14.612 8.511 21.997zM100.525 16.304c-3.195-.846-6.387-1.696-9.585-2.536-4.593-1.207-9.19-2.401-13.781-3.62-.573-.152-.989-.251-1.326.44-1.622 3.324-3.296 6.624-4.944 9.935-.051.103-.041.237-.08.492 9.948-1.507 19.83-3.005 29.71-4.502l.006-.209zM81.993 8.742c8.579 2.374 17.158 4.747 26.037 7.203l-4.302-12.258c-7.29 1.617-14.493 3.214-21.696 4.811l-.039.244zM89.875 88.1l-21.361-2.916c-8.873-1.211-17.73-2.544-26.623-3.569-3.225-.371-6.536-.029-9.806.026-2.687.046-5.374.148-8.06.233-.277.008-.553.064-.828.361 22.21 2.054 44.422 4.107 66.631 6.162l.047-.297zM19.878 71.576c2.864-6.641 5.712-13.287 8.586-19.922.288-.667.267-1.118-.296-1.653-1.203-1.145-2.319-2.378-3.634-3.744l-5.241 25.871.193.092c.133-.214.294-.414.392-.644zM76.29 6.989c4.827-1.246 9.724-2.218 14.592-3.305.314-.071.622-.175.932-.264l-.047-.238-20.916 2.813c1.965.859 3.478 1.5 5.439.994zM30.975 109.422v8.547h-4.724v-22.277h6.491c3.026 0 5.266.551 6.719 1.653s2.18 2.776 2.18 5.02c0 1.311-.361 2.477-1.083 3.497-.721 1.021-1.741 1.822-3.063 2.401l6.553 9.705h-5.242l-5.317-8.547h-2.514zm0-3.84h1.524c1.492 0 2.595-.25 3.306-.747.71-.498 1.066-1.28 1.066-2.346 0-1.057-.363-1.808-1.09-2.255-.726-.447-1.851-.671-3.374-.671h-1.433v6.019zM58.553 117.969l-.624-2.179h-.244c-.498.793-1.204 1.404-2.117 1.836-.915.432-1.957.647-3.124.647-2.002 0-3.51-.535-4.526-1.607s-1.523-2.613-1.523-4.624v-11.108h4.647v9.95c0 1.229.219 2.151.656 2.766.436.615 1.131.921 2.086.921 1.301 0 2.24-.435 2.819-1.302.579-.869.869-2.308.869-4.319v-8.015h4.647v17.035h-3.566zM76.472 100.613c2.011 0 3.586.786 4.725 2.355 1.137 1.569 1.705 3.72 1.705 6.453 0 2.813-.587 4.992-1.759 6.535-1.174 1.545-2.771 2.316-4.793 2.316-2.001 0-3.57-.727-4.708-2.18h-.32l-.776 1.875h-3.551v-23.707h4.647v5.516c0 .701-.062 1.823-.184 3.368h.184c1.086-1.686 2.697-2.531 4.83-2.531zm-1.494 3.719c-1.147 0-1.985.353-2.513 1.059-.528.707-.804 1.872-.823 3.498v.502c0 1.829.271 3.139.814 3.932.544.792 1.405 1.188 2.584 1.188.954 0 1.713-.44 2.277-1.318s.846-2.156.846-3.832c0-1.676-.285-2.934-.854-3.772-.568-.838-1.345-1.257-2.331-1.257zM83.999 100.934h5.089l3.215 9.584c.274.833.463 1.818.563 2.956h.092c.111-1.046.329-2.032.654-2.956l3.154-9.584h4.982l-7.207 19.214c-.66 1.777-1.602 3.108-2.825 3.992-1.225.884-2.654 1.325-4.29 1.325-.803 0-1.59-.086-2.361-.259v-3.687c.559.131 1.168.197 1.828.197.822 0 1.541-.251 2.156-.754.615-.502 1.095-1.261 1.439-2.277l.274-.839-6.763-16.912z"></path>
                        </svg>
                      </div>
                      <div className="icon-box">
                        <svg viewBox="0 0 128 128">
                            <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
                        </svg>
                      </div>
                      <div className="icon-box">
                         <svg viewBox="0 0 128 128">
                              <g fill="#61DAFB"><circle cx="64" cy="47.5" r="9.3"></circle><path d="M64 81.7c7.3 7.1 14.5 11.3 20.3 11.3 1.9 0 3.7-.4 5.2-1.3 5.2-3 7.1-10.5 5.3-21.2-.3-1.9-.7-3.8-1.2-5.8 2-.6 3.8-1.2 5.6-1.8 10.1-3.9 15.7-9.3 15.7-15.2 0-6-5.6-11.4-15.7-15.2-1.8-.7-3.6-1.3-5.6-1.8.5-2 .9-3.9 1.2-5.8 1.7-10.9-.2-18.5-5.4-21.5-1.5-.9-3.3-1.3-5.2-1.3-5.7 0-13 4.2-20.3 11.3-7.2-7.1-14.4-11.3-20.2-11.3-1.9 0-3.7.4-5.2 1.3-5.2 3-7.1 10.5-5.3 21.2.3 1.9.7 3.8 1.2 5.8-2 .6-3.8 1.2-5.6 1.8-10.1 3.9-15.7 9.3-15.7 15.2 0 6 5.6 11.4 15.7 15.2 1.8.7 3.6 1.3 5.6 1.8-.5 2-.9 3.9-1.2 5.8-1.7 10.7.2 18.3 5.3 21.2 1.5.9 3.3 1.3 5.2 1.3 5.8.2 13-4 20.3-11zm-5.6-13.5c1.8.1 3.7.1 5.6.1 1.9 0 3.8 0 5.6-.1-1.8 2.4-3.7 4.6-5.6 6.7-1.9-2.1-3.8-4.3-5.6-6.7zm-12.4-10.3c1 1.7 1.9 3.3 3 4.9-3.1-.4-6-.9-8.8-1.5.9-2.7 1.9-5.5 3.1-8.3.8 1.6 1.7 3.3 2.7 4.9zm-5.8-24.1c2.8-.6 5.7-1.1 8.8-1.5-1 1.6-2 3.2-3 4.9-1 1.7-1.9 3.3-2.7 5-1.3-2.9-2.3-5.7-3.1-8.4zm5.5 13.7c1.3-2.7 2.7-5.4 4.3-8.1 1.5-2.6 3.2-5.2 4.9-7.8 3-.2 6-.3 9.1-.3 3.2 0 6.2.1 9.1.3 1.8 2.6 3.4 5.2 4.9 7.8 1.6 2.7 3 5.4 4.3 8.1-1.3 2.7-2.7 5.4-4.3 8.1-1.5 2.6-3.2 5.2-4.9 7.8-3 .2-6 .3-9.1.3-3.2 0-6.2-.1-9.1-.3-1.8-2.6-3.4-5.2-4.9-7.8-1.6-2.7-3-5.4-4.3-8.1zm39.1-5.4l-2.7-5c-1-1.7-1.9-3.3-3-4.9 3.1.4 6 .9 8.8 1.5-.9 2.8-1.9 5.6-3.1 8.4zm0 10.8c1.2 2.8 2.2 5.6 3.1 8.3-2.8.6-5.7 1.1-8.8 1.5 1-1.6 2-3.2 3-4.9.9-1.5 1.8-3.2 2.7-4.9zm2.3 34.7c-.8.5-1.8.7-2.9.7-4.9 0-11-4-17-10 2.9-3.1 5.7-6.6 8.5-10.5 4.7-.4 9.2-1.1 13.4-2.1.5 1.8.8 3.6 1.1 5.4 1.4 8.5.3 14.6-3.1 16.5zm5.2-52.7c11.2 3.2 17.9 8.1 17.9 12.6 0 3.9-4.6 7.8-12.7 10.9-1.6.6-3.4 1.2-5.2 1.7-1.3-4.1-2.9-8.3-4.9-12.6 2-4.3 3.7-8.5 4.9-12.6zm-8-28.2c1.1 0 2 .2 2.9.7 3.3 1.9 4.5 7.9 3.1 16.5-.3 1.7-.7 3.5-1.1 5.4-4.2-.9-8.7-1.6-13.4-2.1-2.7-3.9-5.6-7.4-8.5-10.5 6-5.9 12.1-10 17-10zm-14.7 20.1c-1.8-.1-3.7-.1-5.6-.1s-3.8 0-5.6.1c1.8-2.4 3.7-4.6 5.6-6.7 1.9 2.1 3.8 4.4 5.6 6.7zm-28.7-19.4c.8-.5 1.8-.7 2.9-.7 4.9 0 11 4 17 10-2.9 3.1-5.7 6.6-8.5 10.5-4.7.4-9.2 1.1-13.4 2.1-.5-1.8-.8-3.6-1.1-5.4-1.4-8.5-.3-14.5 3.1-16.5zm-5.2 52.7c-11.2-3.2-17.9-8.1-17.9-12.6 0-3.9 4.6-7.8 12.7-10.9 1.6-.6 3.4-1.2 5.2-1.7 1.3 4.1 2.9 8.3 4.9 12.6-2 4.3-3.7 8.6-4.9 12.6zm2.1 11c.3-1.7.7-3.5 1.1-5.4 4.2.9 8.7 1.6 13.4 2.1 2.7 3.9 5.6 7.4 8.5 10.5-6 5.9-12.1 10-17 10-1.1 0-2-.2-2.9-.7-3.4-1.9-4.5-8-3.1-16.5zM33.6 112.3c2.2-2.7 2.3-5.7 1.1-8.7-1.2-3-3.7-4.4-6.8-4.5-3.7-.1-7.5 0-11.2 0h-.7v25.9h3v-9.8h4.7c.6 0 1.1.2 1.4.7l6 9.3c.1.2.4.5.6.5h3.9c-2.4-3.7-4.7-7.2-7.1-10.8 2.1-.3 3.9-1 5.1-2.6zm-14.6-.2v-9.9h1.1c2.3 0 4.7-.1 7 .1 2.7.1 4.6 2.2 4.6 4.9s-2.2 4.8-4.9 4.9c-2.4.1-4.8 0-7.8 0zM57.7 113.4c-1.6-7-8-8.8-12.9-6.6-3.8 1.7-5.5 5-5.6 9.1-.1 3.1.8 5.9 3.2 8 2.7 2.4 6 2.7 9.4 2.1 1.9-.4 3.6-1.3 4.9-2.7-.5-.7-1-1.4-1.5-2-2.8 2.4-5.9 3.2-9.3 1.6-2.2-1.1-3.3-3.8-3.5-5.8h15.5v-1.3c.1-.9 0-1.7-.2-2.4zm-15.1 1.6c-.3-3 2.7-6.2 6-6.2 3.8-.1 6.2 2.2 6.3 6.2h-12.3zM73.3 106.3c-1.5-.3-3.1-.4-4.6-.3-2.4.2-4.5 1.3-6.2 3.1.5.7.9 1.4 1.5 2.2.2-.2.4-.4.6-.5 1.6-1.5 3.5-2.3 5.8-2.1 1.8.1 3.5.7 4 2.5.4 1.4.3 2.9.4 4.4-.3 0-.4-.1-.5-.2-2.4-2-5.1-2.4-8-1.7-2.7.7-4.4 2.8-4.6 5.5-.2 3.1 1.2 5.4 3.9 6.5 1.7.7 3.6.7 5.4.3 1.4-.3 2-1.1 4-2.2v1.3h2.8c0-4 .1-8.9 0-13.5 0-2.9-1.7-4.7-4.5-5.3zm1.4 12.6c-.1.3 0 .6 0 .9 0 2.1-.5 2.8-2.5 3.6-1.4.5-2.9.7-4.4.2-1.7-.5-2.9-2-2.9-3.7-.1-1.7 1-3.4 2.7-3.9 2.3-.8 4.4-.3 6.3 1.1.6.5 1 1 .8 1.8zM90.3 109c2.6-.8 5-.3 6.8 1.9l.3.2c.7-.6 1.3-1.2 2.1-1.9-.3-.3-.4-.5-.6-.8-2.9-3.1-8.6-3.5-12.1-1-4.9 3.6-4.8 10.6-2.4 14.3 2.3 3.5 5.6 4.7 9.5 4.2 2.3-.3 4.2-1.4 5.7-3.3-.7-.6-1.4-1.2-2.1-1.9-.2.2-.3.3-.4.5-2.7 3-7.2 2.7-9.6-.5-1.4-1.9-1.7-4.1-1.3-6.3.2-2.5 1.5-4.5 4.1-5.4zM111.1 122.6c-.2.1-.3.2-.3.2-.8.6-1.6.7-2.5.4-.9-.4-1-1.2-1.1-2v-11.4c0-.2 0 .2.1-.8h3.8v-3h-4v-5h-3v5.4h-2.6c-.2 0-.5.2-.5.4-.1.7 0 1.2 0 2.2h3.2v12.799999999999999c0 1.6.4 3 1.8 3.8 1.5.9 4.4.7 5.7-.4.2-.1.3-.5.3-.6-.3-.6-.6-1.3-.9-2z"></path></g>
                        </svg>
                      </div>
                      <div className="icon-box">
                        <svg viewBox="0 0 128 128">
                             <g fill="#A62C46"><path d="M18.922 104.532v21.468h5.476v-5.591l4.983 4.983h8.402l-6.664-6.664s4.795-.078 5.157-7.01c0-6.361-4.8-7.186-10.343-7.186h-7.011zm5.737 5.824h4.722v3.824h-4.722v-3.824z"></path><path d="M48.358 104.619c-2.997-.017-7.155.261-7.155 5.911v14.92h5.62v-3.65h5.447v3.563h5.649v-15.644c0-4.907-5.452-5.1-8.373-5.1h-1.188zm-1.449 5.388h5.273v5.882h-5.273v-5.882z"></path><path d="M63.55 104.632h5.815v20.537h-5.815z"></path><path d="M75.454 104.905v20.537h13.995v-5.452h-8.269v-15.175l-5.726.09z"></path><path d="M107.986 104.722v5.543h-9.36v1.999h3.999s6.453-.09 6.453 6.452c0 6.543-3 6.907-9.088 6.907h-7.36v-4.998h8.451c2.544 0 2.685-.829 2.685-1.551 0-.721-1.3-1.056-3.946-1.056s-7.553-1.301-7.553-6.389c0-5.089 2.545-6.998 7.633-6.998 5.088.001 8.086.091 8.086.091z"></path></g><path fill-rule="evenodd" clip-rule="evenodd" fill="#A62C46" d="M100.556 10.818c-9.749-4.811-19.734-5.3-29.958-1.687-9.408 3.326-16.913 9.277-22.491 17.381-9.44 13.716-16.296 28.682-20.141 44.938-1.966 8.322-3.241 16.304-2.898 24.897.028.698.131 1.653.2 1.653h48.214c-.137 0-.229-.288-.348-.593-2.536-6.475-4.545-12.891-5.933-19.705-1.995-9.784-3.039-19.541-.979-29.416 2.884-13.829 10.767-23.702 24.055-28.873 7.527-2.932 14.67-2.044 20.937 3.455.058.051.175.048.328.073l2.05-3.087c-3.946-3.758-8.282-6.69-13.036-9.036zM25.067 75.154l-9.45-.714-1.07 9.146 8.891 1.068 1.629-9.5zM33.069 47.135c-2.889-1.129-5.58-2.183-8.363-3.273-.928 2.638-1.794 5.093-2.704 7.675 2.919.936 5.668 1.817 8.524 2.731l2.543-7.133zM72.542 89.993c2.855.212 5.716.36 8.867.543-1.145-2.379-2.16-4.53-3.226-6.657-.116-.231-.51-.454-.777-.458-2.422-.035-4.847-.021-7.421-.021.579 2.1 1.084 4.035 1.674 5.945.088.288.563.624.883.648zM47.243 23.889l-6.353-4.207c-1.703 1.903-3.345 3.738-5.08 5.675l6.532 4.39 4.901-5.858zM67.477 66.515c-.009.257.222.665.446.767 2.289 1.028 4.601 2.008 7.119 3.093-.105-1.99-.176-3.654-.294-5.314-.022-.298-.163-.729-.384-.852-2.101-1.164-4.231-2.274-6.562-3.51-.128 2.129-.257 3.97-.325 5.816zM65.595 8.871l-4.35-4.936-5.989 3.113 4.356 5.307 5.983-3.484zM68.323 48.148c-.129.3.043.932.298 1.163 1.737 1.567 3.534 3.066 5.532 4.777.458-1.917.889-3.625 1.255-5.345.065-.307-.025-.813-.238-.983-1.555-1.254-3.159-2.446-4.822-3.716-.731 1.451-1.439 2.751-2.025 4.104zM78.267 6.276c2.22.062 4.443.034 6.788.034-.234-1.632-.345-2.87-.624-4.067-.083-.355-.621-.831-.982-.86-2.225-.181-4.46-.25-6.91-.367.327 1.647.576 3.099.928 4.526.076.304.518.728.8.734zM80.971 34.77c.113-.212.142-.598.023-.784-1.092-1.706-2.224-3.387-3.398-5.154l-3.803 3.491 5.259 5.827c.705-1.23 1.337-2.292 1.919-3.38zM85.071 23.168c.808 1.499 1.54 2.858 2.271 4.219 3.553-1.946 3.894-2.653 2.635-5.458l-4.906 1.239zM102.073 10.171c1.479.912 3.04 1.688 4.627 2.544l1.062-1.654-5.921-4.334c-.082.881-.206 1.499-.174 2.106.025.465.104 1.151.406 1.338zM106 21.868c-3-.351-4-.698-6-1.058v2.714c2 .173 3 .339 6 .513v-2.169z"></path>
                        </svg>
                      </div>
                      <div className="icon-box">
                        <svg viewBox="0 0 128 128">
                            <path fill="none" d="M0 0h128v128H0z"></path><path d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 0 0-17.27-20.85 62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 0 0-9.64 25.25 59.61 59.61 0 0 0 8.47 36.16 2.75 2.75 0 0 1 1.14-.16h.32a9.12 9.12 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z" fill="#764abc"></path>
                        </svg>
                      </div>
                      <div className="icon-box">
                        <svg viewBox="0 0 128 128">
                         <path fill="#E44D26" d="M19.569 27l8.087 89.919 36.289 9.682 36.39-9.499 8.096-90.102h-88.862zm72.041 20.471l-.507 5.834-.223 2.695h-42.569l1.017 12h40.54l-.271 2.231-2.615 28.909-.192 1.69-22.79 6.134v-.005l-.027.012-22.777-5.916-1.546-17.055h11.168l.791 8.46 12.385 3.139.006-.234v.012l12.412-2.649 1.296-13.728h-38.555l-2.734-30.836-.267-3.164h55.724000000000004l-.266 2.471zM27.956 1.627h5.622v5.556h5.144v-5.556h5.623v16.822h-5.623v-5.633h-5.143v5.633h-5.623v-16.822zM51.738 7.206h-4.95v-5.579h15.525v5.579h-4.952v11.243h-5.623v-11.243zM64.777 1.627h5.862l3.607 5.911 3.603-5.911h5.865v16.822h-5.601v-8.338l-3.867 5.981h-.098l-3.87-5.981v8.338h-5.502v-16.822zM86.513 1.627h5.624v11.262h7.907v5.561h-13.531v-16.823z"></path>
                        </svg>
                      </div>
                      <div className="icon-box">
                        <svg viewBox="0 0 128 128">
                            <path fill="#1572B6" d="M19.67 26l8.069 90.493 36.206 10.05 36.307-10.063 8.078-90.48h-88.66zm69.21 50.488l-2.35 21.892.009 1.875-22.539 6.295v.001l-.018.015-22.719-6.225-1.537-17.341h11.141l.79 8.766 12.347 3.295-.004.015v-.032l12.394-3.495 1.308-14.549h-25.907000000000004l-.222-2.355-.506-5.647-.265-2.998h27.886000000000003l1.014-11h-42.473l-.223-2.589-.506-6.03-.265-3.381h55.597l-.267 3.334-2.685 30.154"></path><path fill="#1572B6" d="M89 14.374l-7.149-8.374h7.149v-5h-16v4.363l8.39 7.637h-8.39v5h16zM70 14.374l-6.807-8.374h6.807v-5h-15v4.363l7.733 7.637h-7.733v5h15zM52 13h-8v-7h8v-5h-14v17h14z"></path>
                        </svg>
                      </div>
               </div>
               <div className="languages">
                  <h1>Toolbox  <span className="title-line"></span></h1>
                </div>
                <div className="toolbox">
                      <p>
                        GitHub | VScode | AWS Amplify | AWS Route 53  | Heroku | REST APIs 
                     </p>
                </div>
              
               
           </div>

       </div>
    )
}

export default Skills
