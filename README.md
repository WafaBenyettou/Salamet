# Projet Fin Cycle
We made this project with love and a lot of PARACETAMOL <3


you review the site [here](http://salamet.herokuapp.com/)



<body id="preview">
  <h1 class="code-line" data-line-start=0 data-line-end=1><a id="MERN_Stack_Build_Template_0"></a><strong>MERN Stack Build Template</strong></h1>
  <p class="has-line-data" data-line-start="2" data-line-end="3"><a href="https://youtu.be/5m8hULL9mSI" target="_blank">Video demonstration</a></p>
  <ul>
    <li class="has-line-data" data-line-start="4" data-line-end="5">Make a copy of the root folder and open in Visual Studio Code</li>
    <li class="has-line-data" data-line-start="5" data-line-end="6">Press <code>cmd/ctrl + shift + B</code> to display the build task in the Command Palette</li>
    <li class="has-line-data" data-line-start="6" data-line-end="8">Press enter to select and start the build task</li>
  </ul>
  <p class="has-line-data" data-line-start="8" data-line-end="9">Answer three questions in the terminal, and in seconds you’ll have a MERN stack 👍</p>
  <h2 class="code-line" data-line-start=10 data-line-end=11><a id="Full_Tech_Stack_10"></a>Full Tech Stack</h2>
  <ul>
    <li class="has-line-data" data-line-start="12" data-line-end="13">MongoDB</li>
    <li class="has-line-data" data-line-start="13" data-line-end="14">Mongoose</li>
    <li class="has-line-data" data-line-start="14" data-line-end="16">Express
      <ul>
        <li class="has-line-data" data-line-start="15" data-line-end="16">morgan</li>
      </ul>
    </li>
    <li class="has-line-data" data-line-start="16" data-line-end="17">React</li>
    <li class="has-line-data" data-line-start="17" data-line-end="18">Node</li>
    <li class="has-line-data" data-line-start="18" data-line-end="21">webpack
      <ul>
        <li class="has-line-data" data-line-start="19" data-line-end="20">css-loader</li>
        <li class="has-line-data" data-line-start="20" data-line-end="21">style-loader</li>
      </ul>
    </li>
    <li class="has-line-data" data-line-start="21" data-line-end="22">Babel</li>
    <li class="has-line-data" data-line-start="22" data-line-end="24">nodemon</li>
  </ul>
  <hr>
  <h1 class="code-line" data-line-start=26 data-line-end=27><a id="Getting_Started_26"></a><strong>Getting Started</strong></h1>
  <ol>
    <li class="has-line-data" data-line-start="28" data-line-end="30">
      <p class="has-line-data" data-line-start="28" data-line-end="29">Download this repo and unzip it. The starter files will be deleted automatically after the build, therefore make a copy of the root folder and open in Visual Studio Code.</p>
    </li>
    <li class="has-line-data" data-line-start="30" data-line-end="33">
      <p class="has-line-data" data-line-start="30" data-line-end="31">Ensure you have the <code>code</code> shell command enabled:</p>
      <ul>
        <li class="has-line-data" data-line-start="31" data-line-end="33">In Visual Studio Code’s Command Palette, search for and click “Shell Command: Install ‘code’ command in PATH”</li>
      </ul>
    </li>
    <li class="has-line-data" data-line-start="33" data-line-end="35">
      <p class="has-line-data" data-line-start="33" data-line-end="34">Press <code>cmd/ctrl + shift + B</code> to display the build task in the Command Palette, and press enter to select and start the build task.</p>
    </li>
    <li class="has-line-data" data-line-start="35" data-line-end="40">
      <p class="has-line-data" data-line-start="35" data-line-end="36">Finally, complete the terminal prompts for the following:</p>
      <ul>
        <li class="has-line-data" data-line-start="36" data-line-end="37">HTML <code>&lt;title&gt;</code> innerText</li>
        <li class="has-line-data" data-line-start="37" data-line-end="38">localhost port number</li>
        <li class="has-line-data" data-line-start="38" data-line-end="40">Database name</li>
      </ul>
    </li>
  </ol>
  <h2 class="code-line" data-line-start=40 data-line-end=41><a id="What_Does_The_Build_Include_40"></a>What Does The Build Include?</h2>
  <p class="has-line-data" data-line-start="42" data-line-end="43">After the prompt, the build will begin and includes the following:</p>
  <ul>
    <li class="has-line-data" data-line-start="44" data-line-end="45">Frontend build</li>
    <li class="has-line-data" data-line-start="45" data-line-end="46">Backend build</li>
    <li class="has-line-data" data-line-start="46" data-line-end="47"><code>npm install</code></li>
    <li class="has-line-data" data-line-start="47" data-line-end="48">Initialize git and first commit</li>
    <li class="has-line-data" data-line-start="48" data-line-end="49">Starter file deletion</li>
    <li class="has-line-data" data-line-start="49" data-line-end="50">Second commit to indicate starter file deletion</li>
    <li class="has-line-data" data-line-start="50" data-line-end="51">Start webpack in watch mode (for frontend)</li>
    <li class="has-line-data" data-line-start="51" data-line-end="52">Start Babel in watch mode (for backend)</li>
    <li class="has-line-data" data-line-start="52" data-line-end="54">Start nodemon</li>
  </ul>
  <h3 class="code-line" data-line-start=54 data-line-end=55><a id="File_Structure_54"></a>File Structure</h3>
  <pre><code class="has-line-data" data-line-start="57" data-line-end="131">MERN-stack-build-template
│
├── backend
│   │
│   ├── database
│   │   │
│   │   ├── crud.js
│   │   ├── index.js
│   │   ├── seeder.js
│   │   ├── URI.js
│   │   └── utils.js
│   │
│   ├── doc
│   │   │
│   │   ├── docController.js
│   │   ├── docModel.js
│   │   └── docRouter.js
│   │
│   └── server
│       │
│       └── index.js
│
├── client
│   │
│   ├── public
│   │   │
│   │   ├── bundle.js
│   │   └── index.html
│   │
│   └── src
│       │
│       ├── components
│       │   │
│       │   └── App.jsx
│       │
│       ├── index.jsx
│       └── style.css
│
├── dist (same as backend, but compiled by Babel)
│   │
│   ├── database
│   │   │
│   │   ├── crud.js
│   │   ├── index.js
│   │   ├── seeder.js
│   │   ├── URI.js
│   │   └── utils.js
│   │
│   ├── doc
│   │   │
│   │   ├── docController.js
│   │   ├── docModel.js
│   │   └── docRouter.js
│   │
│   └── server
│       │
│       └── index.js
│
├── node_modules
│
├── .babelrc
│
├── .gitignore
│
├── package-lock.json
│
├── package.json
│
├── README.md
│
├── TODO
│
└── webpack.config.js
</code></pre>
  <h3 class="code-line" data-line-start=132 data-line-end=133><a id="npm_132"></a>npm</h3>
  <ul>
    <li class="has-line-data" data-line-start="133" data-line-end="134">npm modules will install automatically</li>
    <li class="has-line-data" data-line-start="134" data-line-end="136">Change them as necessary before running the build task</li>
  </ul>
  <h3 class="code-line" data-line-start=136 data-line-end=137><a id="Git_136"></a>Git</h3>
  <ul>
    <li class="has-line-data" data-line-start="137" data-line-end="138">A git repo will be initialized automatically</li>
    <li class="has-line-data" data-line-start="138" data-line-end="139">The first commit will commit all files with the message “git init”</li>
    <li class="has-line-data" data-line-start="139" data-line-end="141">The second commit is for the starter file deletions with the message “deleted starter files”</li>
  </ul>
  <h3 class="code-line" data-line-start=141 data-line-end=142><a id="webpack_Babel_nodemon_141"></a>webpack, Babel, nodemon</h3>
  <ul>
    <li class="has-line-data" data-line-start="142" data-line-end="144">These will all start in watch mode, split into their own panes within a single panel 👍</li>
  </ul>
  <h3 class="code-line" data-line-start=144 data-line-end=145><a id="Browser_144"></a>Browser</h3>
  <ul>
    <li class="has-line-data" data-line-start="145" data-line-end="146">A browser tab will launch automatically</li>
    <li class="has-line-data" data-line-start="146" data-line-end="148">Refresh after nodemon starts</li>
  </ul>
  <h1 class="code-line" data-line-start=148 data-line-end=149><a id="Loose_Ends_148"></a><strong>Loose Ends</strong></h1>
  <p class="has-line-data" data-line-start="149" data-line-end="150">For your project needs:</p>
  <ul>
    <li class="has-line-data" data-line-start="150" data-line-end="151">Customize docRouter.js endpoints</li>
    <li class="has-line-data" data-line-start="151" data-line-end="152">Add crud.js functionality</li>
    <li class="has-line-data" data-line-start="152" data-line-end="154">Customize schema in docModel.js</li>
  </ul>
  <p class="has-line-data" data-line-start="154" data-line-end="155"><strong>Note:</strong> Starter files will be deleted after they serve their purpose. Therefore, to start a new project, always copy the root folder.</p>
  <hr>
  <h1 class="code-line" data-line-start=158 data-line-end=159><a id="Author_158"></a><strong>Author</strong></h1>
  <ul>
    <li class="has-line-data" data-line-start="160" data-line-end="161"><strong>Kent Warren</strong> - <a href="https://github.com/WarrenMfg" target="_blank">GitHub</a></li>
    <li class="has-line-data" data-line-start="161" data-line-end="162"><strong>The Art of Warren</strong> - <a href="https://kent-warren.bss.design/" target="_blank">Portfolio</a></li>
  </ul>
  <h2 class="code-line" data-line-start=164 data-line-end=165><a id="Acknowledgments_164"></a>Acknowledgments</h2>
  <ul>
    <li class="has-line-data" data-line-start="165" data-line-end="167"><strong>Scott Moss</strong> - <a href="https://github.com/Hendrixer" target="_blank">GitHub</a> - For the backend workflow concepts taught on <a href="https://frontendmasters.com/" target="_blank">Frontend Masters</a></li>
  </ul>
  <h1 class="code-line" data-line-start=167 data-line-end=168><a id="License_167"></a><strong>License</strong></h1>
  <h2 class="code-line" data-line-start=169 data-line-end=170><a id="MIT_169"></a>MIT</h2>
  <p class="has-line-data" data-line-start="170" data-line-end="171">Copyright 2020 Kenneth Warren</p>
  <p class="has-line-data" data-line-start="172" data-line-end="173">Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
  <p class="has-line-data" data-line-start="174" data-line-end="175">The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
  <p class="has-line-data" data-line-start="176" data-line-end="177">THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
</body>
