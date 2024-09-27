<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>PCB Business Card</title><style>
/* cspell:disable-file */
/* webkit printing magic: print all background colors */
html {
	-webkit-print-color-adjust: exact;
}
* {
	box-sizing: border-box;
	-webkit-print-color-adjust: exact;
}

html,
body {
	margin: 0;
	padding: 0;
}
@media only screen {
	body {
		margin: 2em auto;
		max-width: 900px;
		color: rgb(55, 53, 47);
	}
}

body {
	line-height: 1.5;
	white-space: pre-wrap;
}

a,
a.visited {
	color: inherit;
	text-decoration: underline;
}

.pdf-relative-link-path {
	font-size: 80%;
	color: #444;
}

h1,
h2,
h3 {
	letter-spacing: -0.01em;
	line-height: 1.2;
	font-weight: 600;
	margin-bottom: 0;
}

.page-title {
	font-size: 2.5rem;
	font-weight: 700;
	margin-top: 0;
	margin-bottom: 0.75em;
}

h1 {
	font-size: 1.875rem;
	margin-top: 1.875rem;
}

h2 {
	font-size: 1.5rem;
	margin-top: 1.5rem;
}

h3 {
	font-size: 1.25rem;
	margin-top: 1.25rem;
}

.source {
	border: 1px solid #ddd;
	border-radius: 3px;
	padding: 1.5em;
	word-break: break-all;
}

.callout {
	border-radius: 3px;
	padding: 1rem;
}

figure {
	margin: 1.25em 0;
	page-break-inside: avoid;
}

figcaption {
	opacity: 0.5;
	font-size: 85%;
	margin-top: 0.5em;
}

mark {
	background-color: transparent;
}

.indented {
	padding-left: 1.5em;
}

hr {
	background: transparent;
	display: block;
	width: 100%;
	height: 1px;
	visibility: visible;
	border: none;
	border-bottom: 1px solid rgba(55, 53, 47, 0.09);
}

img {
	max-width: 100%;
}

@media only print {
	img {
		max-height: 100vh;
		object-fit: contain;
	}
}

@page {
	margin: 1in;
}

.collection-content {
	font-size: 0.875rem;
}

.column-list {
	display: flex;
	justify-content: space-between;
}

.column {
	padding: 0 1em;
}

.column:first-child {
	padding-left: 0;
}

.column:last-child {
	padding-right: 0;
}

.table_of_contents-item {
	display: block;
	font-size: 0.875rem;
	line-height: 1.3;
	padding: 0.125rem;
}

.table_of_contents-indent-1 {
	margin-left: 1.5rem;
}

.table_of_contents-indent-2 {
	margin-left: 3rem;
}

.table_of_contents-indent-3 {
	margin-left: 4.5rem;
}

.table_of_contents-link {
	text-decoration: none;
	opacity: 0.7;
	border-bottom: 1px solid rgba(55, 53, 47, 0.18);
}

table,
th,
td {
	border: 1px solid rgba(55, 53, 47, 0.09);
	border-collapse: collapse;
}

table {
	border-left: none;
	border-right: none;
}

th,
td {
	font-weight: normal;
	padding: 0.25em 0.5em;
	line-height: 1.5;
	min-height: 1.5em;
	text-align: left;
}

th {
	color: rgba(55, 53, 47, 0.6);
}

ol,
ul {
	margin: 0;
	margin-block-start: 0.6em;
	margin-block-end: 0.6em;
}

li > ol:first-child,
li > ul:first-child {
	margin-block-start: 0.6em;
}

ul > li {
	list-style: disc;
}

ul.to-do-list {
	padding-inline-start: 0;
}

ul.to-do-list > li {
	list-style: none;
}

.to-do-children-checked {
	text-decoration: line-through;
	opacity: 0.375;
}

ul.toggle > li {
	list-style: none;
}

ul {
	padding-inline-start: 1.7em;
}

ul > li {
	padding-left: 0.1em;
}

ol {
	padding-inline-start: 1.6em;
}

ol > li {
	padding-left: 0.2em;
}

.mono ol {
	padding-inline-start: 2em;
}

.mono ol > li {
	text-indent: -0.4em;
}

.toggle {
	padding-inline-start: 0em;
	list-style-type: none;
}

/* Indent toggle children */
.toggle > li > details {
	padding-left: 1.7em;
}

.toggle > li > details > summary {
	margin-left: -1.1em;
}

.selected-value {
	display: inline-block;
	padding: 0 0.5em;
	background: rgba(206, 205, 202, 0.5);
	border-radius: 3px;
	margin-right: 0.5em;
	margin-top: 0.3em;
	margin-bottom: 0.3em;
	white-space: nowrap;
}

.collection-title {
	display: inline-block;
	margin-right: 1em;
}

.page-description {
    margin-bottom: 2em;
}

.simple-table {
	margin-top: 1em;
	font-size: 0.875rem;
	empty-cells: show;
}
.simple-table td {
	height: 29px;
	min-width: 120px;
}

.simple-table th {
	height: 29px;
	min-width: 120px;
}

.simple-table-header-color {
	background: rgb(247, 246, 243);
	color: black;
}
.simple-table-header {
	font-weight: 500;
}

time {
	opacity: 0.5;
}

.icon {
	display: inline-block;
	max-width: 1.2em;
	max-height: 1.2em;
	text-decoration: none;
	vertical-align: text-bottom;
	margin-right: 0.5em;
}

img.icon {
	border-radius: 3px;
}

.user-icon {
	width: 1.5em;
	height: 1.5em;
	border-radius: 100%;
	margin-right: 0.5rem;
}

.user-icon-inner {
	font-size: 0.8em;
}

.text-icon {
	border: 1px solid #000;
	text-align: center;
}

.page-cover-image {
	display: block;
	object-fit: cover;
	width: 100%;
	max-height: 30vh;
}

.page-header-icon {
	font-size: 3rem;
	margin-bottom: 1rem;
}

.page-header-icon-with-cover {
	margin-top: -0.72em;
	margin-left: 0.07em;
}

.page-header-icon img {
	border-radius: 3px;
}

.link-to-page {
	margin: 1em 0;
	padding: 0;
	border: none;
	font-weight: 500;
}

p > .user {
	opacity: 0.5;
}

td > .user,
td > time {
	white-space: nowrap;
}

input[type="checkbox"] {
	transform: scale(1.5);
	margin-right: 0.6em;
	vertical-align: middle;
}

p {
	margin-top: 0.5em;
	margin-bottom: 0.5em;
}

.image {
	border: none;
	margin: 1.5em 0;
	padding: 0;
	border-radius: 0;
	text-align: center;
}

.code,
code {
	background: rgba(135, 131, 120, 0.15);
	border-radius: 3px;
	padding: 0.2em 0.4em;
	border-radius: 3px;
	font-size: 85%;
	tab-size: 2;
}

code {
	color: #eb5757;
}

.code {
	padding: 1.5em 1em;
}

.code-wrap {
	white-space: pre-wrap;
	word-break: break-all;
}

.code > code {
	background: none;
	padding: 0;
	font-size: 100%;
	color: inherit;
}

blockquote {
	font-size: 1.25em;
	margin: 1em 0;
	padding-left: 1em;
	border-left: 3px solid rgb(55, 53, 47);
}

.bookmark {
	text-decoration: none;
	max-height: 8em;
	padding: 0;
	display: flex;
	width: 100%;
	align-items: stretch;
}

.bookmark-title {
	font-size: 0.85em;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 1.75em;
	white-space: nowrap;
}

.bookmark-text {
	display: flex;
	flex-direction: column;
}

.bookmark-info {
	flex: 4 1 180px;
	padding: 12px 14px 14px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.bookmark-image {
	width: 33%;
	flex: 1 1 180px;
	display: block;
	position: relative;
	object-fit: cover;
	border-radius: 1px;
}

.bookmark-description {
	color: rgba(55, 53, 47, 0.6);
	font-size: 0.75em;
	overflow: hidden;
	max-height: 4.5em;
	word-break: break-word;
}

.bookmark-href {
	font-size: 0.75em;
	margin-top: 0.25em;
}

.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }
.code { font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace; }
.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }
.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }
.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }
.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }
.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }
.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }
.pdf .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }
.pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }
.pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }
.pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }
.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.highlight-default {
	color: rgba(55, 53, 47, 1);
}
.highlight-gray {
	color: rgba(120, 119, 116, 1);
	fill: rgba(120, 119, 116, 1);
}
.highlight-brown {
	color: rgba(159, 107, 83, 1);
	fill: rgba(159, 107, 83, 1);
}
.highlight-orange {
	color: rgba(217, 115, 13, 1);
	fill: rgba(217, 115, 13, 1);
}
.highlight-yellow {
	color: rgba(203, 145, 47, 1);
	fill: rgba(203, 145, 47, 1);
}
.highlight-teal {
	color: rgba(68, 131, 97, 1);
	fill: rgba(68, 131, 97, 1);
}
.highlight-blue {
	color: rgba(51, 126, 169, 1);
	fill: rgba(51, 126, 169, 1);
}
.highlight-purple {
	color: rgba(144, 101, 176, 1);
	fill: rgba(144, 101, 176, 1);
}
.highlight-pink {
	color: rgba(193, 76, 138, 1);
	fill: rgba(193, 76, 138, 1);
}
.highlight-red {
	color: rgba(212, 76, 71, 1);
	fill: rgba(212, 76, 71, 1);
}
.highlight-default_background {
	color: rgba(55, 53, 47, 1);
}
.highlight-gray_background {
	background: rgba(241, 241, 239, 1);
}
.highlight-brown_background {
	background: rgba(244, 238, 238, 1);
}
.highlight-orange_background {
	background: rgba(251, 236, 221, 1);
}
.highlight-yellow_background {
	background: rgba(251, 237, 214, 1);
}
.highlight-teal_background {
	background: rgba(237, 243, 236, 1);
}
.highlight-blue_background {
	background: rgba(231, 243, 248, 1);
}
.highlight-purple_background {
	background: rgba(244, 240, 247, 0.8);
}
.highlight-pink_background {
	background: rgba(249, 238, 243, 0.8);
}
.highlight-red_background {
	background: rgba(253, 235, 236, 1);
}
.block-color-default {
	color: inherit;
	fill: inherit;
}
.block-color-gray {
	color: rgba(120, 119, 116, 1);
	fill: rgba(120, 119, 116, 1);
}
.block-color-brown {
	color: rgba(159, 107, 83, 1);
	fill: rgba(159, 107, 83, 1);
}
.block-color-orange {
	color: rgba(217, 115, 13, 1);
	fill: rgba(217, 115, 13, 1);
}
.block-color-yellow {
	color: rgba(203, 145, 47, 1);
	fill: rgba(203, 145, 47, 1);
}
.block-color-teal {
	color: rgba(68, 131, 97, 1);
	fill: rgba(68, 131, 97, 1);
}
.block-color-blue {
	color: rgba(51, 126, 169, 1);
	fill: rgba(51, 126, 169, 1);
}
.block-color-purple {
	color: rgba(144, 101, 176, 1);
	fill: rgba(144, 101, 176, 1);
}
.block-color-pink {
	color: rgba(193, 76, 138, 1);
	fill: rgba(193, 76, 138, 1);
}
.block-color-red {
	color: rgba(212, 76, 71, 1);
	fill: rgba(212, 76, 71, 1);
}
.block-color-default_background {
	color: inherit;
	fill: inherit;
}
.block-color-gray_background {
	background: rgba(241, 241, 239, 1);
}
.block-color-brown_background {
	background: rgba(244, 238, 238, 1);
}
.block-color-orange_background {
	background: rgba(251, 236, 221, 1);
}
.block-color-yellow_background {
	background: rgba(251, 237, 214, 1);
}
.block-color-teal_background {
	background: rgba(237, 243, 236, 1);
}
.block-color-blue_background {
	background: rgba(231, 243, 248, 1);
}
.block-color-purple_background {
	background: rgba(244, 240, 247, 0.8);
}
.block-color-pink_background {
	background: rgba(249, 238, 243, 0.8);
}
.block-color-red_background {
	background: rgba(253, 235, 236, 1);
}
.select-value-color-uiBlue { background-color: rgba(35, 131, 226, .07); }
.select-value-color-pink { background-color: rgba(245, 224, 233, 1); }
.select-value-color-purple { background-color: rgba(232, 222, 238, 1); }
.select-value-color-green { background-color: rgba(219, 237, 219, 1); }
.select-value-color-gray { background-color: rgba(227, 226, 224, 1); }
.select-value-color-transparentGray { background-color: rgba(227, 226, 224, 0); }
.select-value-color-translucentGray { background-color: rgba(0, 0, 0, 0.06); }
.select-value-color-orange { background-color: rgba(250, 222, 201, 1); }
.select-value-color-brown { background-color: rgba(238, 224, 218, 1); }
.select-value-color-red { background-color: rgba(255, 226, 221, 1); }
.select-value-color-yellow { background-color: rgba(249, 228, 188, 1); }
.select-value-color-blue { background-color: rgba(211, 229, 239, 1); }
.select-value-color-pageGlass { background-color: undefined; }
.select-value-color-washGlass { background-color: undefined; }

.checkbox {
	display: inline-flex;
	vertical-align: text-bottom;
	width: 16;
	height: 16;
	background-size: 16px;
	margin-left: 2px;
	margin-right: 5px;
}

.checkbox-on {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");
}

.checkbox-off {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");
}
	
</style></head><body><article id="1071953a-b5aa-817c-8e55-cdb8658a9c46" class="page sans"><header><img class="page-cover-image" src="https://www.notion.so/images/page-cover/gradients_3.png" style="object-position:center 60%"/><div class="page-header-icon page-header-icon-with-cover"><span class="icon">🪪</span></div><h1 class="page-title">PCB Business Card</h1><p class="page-description"></p><table class="properties"><tbody><tr class="property-row property-row-checkbox"><th><span class="icon property-icon"><svg role="graphics-symbol" viewBox="0 0 16 16" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.45);flex-shrink:0" class="typesCheckbox"><path d="M3.85742 14.4561H12.1357C13.6123 14.4561 14.3779 13.6904 14.3779 12.2344V3.91504C14.3779 2.45215 13.6123 1.69336 12.1357 1.69336H3.85742C2.38086 1.69336 1.61523 2.45215 1.61523 3.91504V12.2344C1.61523 13.6973 2.38086 14.4561 3.85742 14.4561ZM3.93945 13.1162C3.30371 13.1162 2.95508 12.7812 2.95508 12.1182V4.02441C2.95508 3.36133 3.30371 3.0332 3.93945 3.0332H12.0537C12.6826 3.0332 13.0381 3.36133 13.0381 4.02441V12.1182C13.0381 12.7812 12.6826 13.1162 12.0537 13.1162H3.93945ZM7.26855 11.3115C7.51465 11.3115 7.72656 11.1885 7.87012 10.9697L10.9258 6.19141C11.0146 6.04785 11.0967 5.88379 11.0967 5.72656C11.0967 5.3916 10.7959 5.16602 10.4746 5.16602C10.2695 5.16602 10.085 5.27539 9.94141 5.50781L7.24121 9.8418L5.96973 8.22168C5.80566 8.00977 5.6416 7.93457 5.43652 7.93457C5.10156 7.93457 4.8418 8.20117 4.8418 8.54297C4.8418 8.70703 4.90332 8.85742 5.01953 9.00098L6.63281 10.9697C6.81738 11.209 7.01562 11.3115 7.26855 11.3115Z"></path></svg></span>Costing Money</th><td><div class="checkbox checkbox-off"></div></td></tr><tr class="property-row property-row-auto_increment_id"><th><span class="icon property-icon"><svg role="graphics-symbol" viewBox="0 0 16 16" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.45);flex-shrink:0" class="typesId"><path d="M12.252 7.9209C13.7217 7.9209 14.7266 6.93652 14.7266 5.50781C14.7266 4.0791 13.7217 3.10156 12.252 3.10156C10.8232 3.10156 9.8457 4.0791 9.8457 5.50781C9.8457 6.93652 10.8301 7.9209 12.252 7.9209ZM2.00488 13.1367C2.45605 13.1367 2.72949 12.8496 2.72949 12.3848V5.83594L7.35059 12.5967C7.6377 12.9932 7.86328 13.1367 8.20508 13.1367C8.69043 13.1367 8.96387 12.8359 8.96387 12.3232V3.8877C8.96387 3.42285 8.69043 3.12891 8.23242 3.12891C7.78809 3.12891 7.50781 3.41602 7.50781 3.8877V10.4229L2.89355 3.66895C2.60645 3.25879 2.40137 3.12891 2.03906 3.12891C1.56738 3.12891 1.27344 3.4502 1.27344 3.94238V12.3848C1.27344 12.8496 1.55371 13.1367 2.00488 13.1367ZM12.252 6.84766C11.5615 6.84766 11.0898 6.30762 11.0898 5.50781C11.0898 4.70801 11.5615 4.16797 12.252 4.16797C12.9902 4.16797 13.4756 4.70801 13.4756 5.50781C13.4756 6.30762 12.9834 6.84766 12.252 6.84766ZM10.625 9.77344H13.9541C14.3506 9.77344 14.624 9.54102 14.624 9.14453C14.624 8.74805 14.3506 8.50195 13.9541 8.50195H10.625C10.2285 8.50195 9.96191 8.74805 9.96191 9.14453C9.96191 9.54102 10.2285 9.77344 10.625 9.77344Z"></path></svg></span>ID</th><td>PR-14</td></tr><tr class="property-row property-row-select"><th><span class="icon property-icon"><svg role="graphics-symbol" viewBox="0 0 16 16" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.45);flex-shrink:0" class="typesSelect"><path d="M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.6738 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM7.62402 10.6348C7.79492 10.915 8.20508 10.9287 8.37598 10.6348L10.666 6.73145C10.8574 6.41016 10.7002 6.04102 10.3652 6.04102H5.62793C5.29297 6.04102 5.14941 6.43066 5.32031 6.73145L7.62402 10.6348Z"></path></svg></span>Relation</th><td><span class="selected-value select-value-color-purple">Personal</span></td></tr><tr class="property-row property-row-status"><th><span class="icon property-icon"><svg role="graphics-symbol" viewBox="0 0 16 16" style="width:14px;height:14px;display:block;fill:rgba(55, 53, 47, 0.45);flex-shrink:0" class="typesStatus"><path d="M8.75488 1.02344C8.75488 0.613281 8.41309 0.264648 8.00293 0.264648C7.59277 0.264648 7.25098 0.613281 7.25098 1.02344V3.11523C7.25098 3.51855 7.59277 3.86719 8.00293 3.86719C8.41309 3.86719 8.75488 3.51855 8.75488 3.11523V1.02344ZM3.91504 5.0293C4.20215 5.31641 4.69434 5.32324 4.97461 5.03613C5.26855 4.74902 5.26855 4.25684 4.98145 3.96973L3.53906 2.52051C3.25195 2.2334 2.7666 2.21973 2.47949 2.50684C2.19238 2.79395 2.18555 3.28613 2.47266 3.57324L3.91504 5.0293ZM10.9629 4.01758C10.6826 4.30469 10.6826 4.79688 10.9697 5.08398C11.2568 5.37109 11.749 5.36426 12.0361 5.07715L13.4854 3.62793C13.7725 3.34082 13.7725 2.84863 13.4785 2.55469C13.1982 2.27441 12.7061 2.27441 12.4189 2.56152L10.9629 4.01758ZM15.0234 8.78906C15.4336 8.78906 15.7822 8.44727 15.7822 8.03711C15.7822 7.62695 15.4336 7.28516 15.0234 7.28516H12.9385C12.5283 7.28516 12.1797 7.62695 12.1797 8.03711C12.1797 8.44727 12.5283 8.78906 12.9385 8.78906H15.0234ZM0.975586 7.28516C0.56543 7.28516 0.223633 7.62695 0.223633 8.03711C0.223633 8.44727 0.56543 8.78906 0.975586 8.78906H3.07422C3.48438 8.78906 3.83301 8.44727 3.83301 8.03711C3.83301 7.62695 3.48438 7.28516 3.07422 7.28516H0.975586ZM12.0361 10.9902C11.749 10.71 11.2568 10.71 10.9629 10.9971C10.6826 11.2842 10.6826 11.7764 10.9697 12.0635L12.4258 13.5127C12.7129 13.7998 13.2051 13.793 13.4922 13.5059C13.7793 13.2256 13.7725 12.7266 13.4854 12.4395L12.0361 10.9902ZM2.52051 12.4395C2.22656 12.7266 2.22656 13.2188 2.50684 13.5059C2.79395 13.793 3.28613 13.7998 3.57324 13.5127L5.02246 12.0703C5.31641 11.7832 5.31641 11.291 5.03613 11.0039C4.74902 10.7168 4.25684 10.71 3.96973 10.9971L2.52051 12.4395ZM8.75488 12.9658C8.75488 12.5557 8.41309 12.207 8.00293 12.207C7.59277 12.207 7.25098 12.5557 7.25098 12.9658V15.0576C7.25098 15.4609 7.59277 15.8096 8.00293 15.8096C8.41309 15.8096 8.75488 15.4609 8.75488 15.0576V12.9658Z"></path></svg></span>Status</th><td><span class="status-value select-value-color-blue"><div class="status-dot status-dot-color-blue"></div>In progress</span></td></tr><tr class="property-row property-row-multi_select"><th><span class="icon property-icon"><img src="https://www.notion.so/icons/kind_gray.svg" style="width:14px;height:14px"/></span>Type</th><td><span class="selected-value select-value-color-red">Design</span><span class="selected-value select-value-color-green">Hardware</span><span class="selected-value select-value-color-purple">PCB</span></td></tr></tbody></table></header><div class="page-body"><h1 id="fff1953a-b5aa-816b-a554-c828e3c514c5" class="">PCB Business Card</h1><div id="fff1953a-b5aa-8162-872c-e7ee58de8fed" class="column-list"><div id="fff1953a-b5aa-816d-9e91-ecdbfb63408d" style="width:50%" class="column"><p id="fff1953a-b5aa-81b4-8ded-f6fe193bd435" class="">This project is a showcase of PCB design. It is the process of creating an interactable business/id card. Prioritizing low cost, low profile components, and low power, this is an experience for me to learn and grow within the realm of embedded circuits.</p></div><div id="fff1953a-b5aa-8183-8564-ec671ede632a" style="width:50%" class="column"><p id="fff1953a-b5aa-81fb-92ec-eb0135aba6c5" class="">My goal for this project is to create a number of relatively cheap and easy-to-make business cards. I currently am aiming for a NFC enabled card, that will open my portfolio site when tapped. Additionally, I would like to display a sand simulation within an 8x8 LED matrix. </p></div></div><hr id="fff1953a-b5aa-81b7-b173-e5f18aa9578a"/><h1 id="fff1953a-b5aa-81f7-bc71-eba7963ba633" class="">Inspiration</h1><p id="fff1953a-b5aa-81e7-ad19-e3f7cc52f53b" class="">After embarking on this project I realized it is very unoriginal and looks virtually identical to many before me. I can but only aspire to reach the same quality as my forefathers.</p><div id="fff1953a-b5aa-8120-8941-f8a8e73cb94d" class="column-list"><div id="fff1953a-b5aa-81c2-87b2-d991c7cb010a" style="width:50%" class="column"><figure id="fff1953a-b5aa-8136-9948-df69c14a4e0a" class="image"><a href="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/stylo7.jpeg"><img style="width:330.9921875px" src="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/stylo7.jpeg"/></a></figure><p id="fff1953a-b5aa-81bd-8bb2-c316eebd6993" class="">A <strong>preem</strong> business card example, made by Tim Jacobs (<a href="http://mitxela.com">mitxela.com</a>), this card doubles as a MIDI module</p></div><div id="fff1953a-b5aa-817f-8d4a-d455664fb16e" style="width:50%" class="column"><figure id="fff1953a-b5aa-8183-ac8d-de5a2fabfb62" class="image"><a href="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/_wUxdxBNkjN.jpeg"><img style="width:330.984375px" src="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/_wUxdxBNkjN.jpeg"/></a></figure><p id="fff1953a-b5aa-8134-b47a-f84215ac2e38" class="">A card that is kinda similar to mine (although I use a few more LEDS) I came across this one after I was in the development stage, but still am kinda sad how similar they are. (I even think he uses the same microprocessor)</p></div></div><hr id="fff1953a-b5aa-811b-86b3-f4bd53b4334a"/><h1 id="fff1953a-b5aa-81c6-a4c5-d15b478f4b82" class="">Methodology</h1><p id="fff1953a-b5aa-8167-9b6d-dc2707a37106" class="">The card has four main components: a NFC module, a LED matrix, an IMU, and a power source</p><div id="fff1953a-b5aa-81ac-a35f-e26f5366c058" class="column-list"><div id="fff1953a-b5aa-8127-ab00-e06d20b45074" style="width:50%" class="column"><h2 id="fff1953a-b5aa-8168-ac7f-e9895c2b3587" class="">NFC Module</h2><p id="fff1953a-b5aa-81c9-afef-fec0ed8ce9b1" class="">The NFC module has the goal of opening up my website when read by a nearby phone. I currently think I can do that by simply transmitting the HTML to the site. Additionally, I am trying to make the chip passive enabled if the battery is empty/not installed, allowing the card to do a rudimentary interaction, even if there is no power. I am using the <a href="https://www.notion.so/LSM6DSV16XTR-c3e6388a27ca4b48abd629da58da2ea6?pvs=21">LSM6DSV16XTR</a> NFC component to do this. </p><p id="10c1953a-b5aa-803c-9989-ef6d5234dfc1" class="">In my first iteration, the NFC antenna traced the perimeter of the card. This gave a uniform NFC distribution, but caused problems when I needed to route ground traces.</p><p id="10e1953a-b5aa-8079-8329-ff7511815c79" class="">The second iteration dedicated half of the card to a smaller antenna, with the other half containing the logic electronics, this served to remove interference from ground elements by isolating the antenna from the rest of the board.</p></div><div id="fff1953a-b5aa-8183-85ab-d19873b38523" style="width:50%" class="column"><p id="fff1953a-b5aa-810a-a71a-d0bae335365c" class="">
</p><figure id="fff1953a-b5aa-8159-9f5a-c0d90db0cd99" class="image"><a href="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/Screenshot_2024-09-27_at_9.36.49_AM.png"><img style="width:1666px" src="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/Screenshot_2024-09-27_at_9.36.49_AM.png"/></a></figure><p id="10e1953a-b5aa-8070-b605-f435c3ce90bb" class=""><em>Iteration 1: NFC antenna traces loop perimeter</em></p><figure id="10e1953a-b5aa-8072-a60d-d4e8a18ff9a6" class="image"><a href="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/Screenshot_2024-09-27_at_9.31.28_AM.png"><img style="width:1554px" src="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/Screenshot_2024-09-27_at_9.31.28_AM.png"/></a></figure><p id="10e1953a-b5aa-8009-a7b2-dfab3a6bbf7a" class=""><em>Iteration 2: NFC antenna traces dedicated antenna section</em></p></div></div><h2 id="fff1953a-b5aa-81f7-9a31-cb0318452938" class="">LED Matrix</h2><div id="10e1953a-b5aa-8029-b402-f24cf7351991" class="column-list"><div id="10e1953a-b5aa-80b2-a8ba-dc29ab64ff07" style="width:50%" class="column"><p id="fff1953a-b5aa-8137-8647-ee4c198ebb56" class="">The LED matrix is the primary display module of the card, originally planned to be composed of 0201 footprint LEDs, the matrix consists of an 8x8 array of 64 0603 footprint low-current LEDs, in a common cathode matrix.</p><p id="10e1953a-b5aa-80b9-824c-d2ee97d7b1a7" class="">The specific LEDs used were as mentioned, initially 0201 SunBright nano-LEDs, prioritizing display size efficiency and brightness per square-inch. However, due to cost and current draw, I decided to go with the much larger, but more efficient <a href="https://www.notion.so/KW-DELPS2-RA-MIPI-FK3PM3-S4W5-0-5-R18-10d1953ab5aa8064af68c216402e57f9?pvs=21">KW DELPS2.RA-MIPI-FK3PM3-S4W5-0.5-R18</a> LEDs. These larger LEDs have an advertised current draw of 0.5mA compared to the SunBright 20mA (they are also much cheaper, and easier to work with). Depending on their performance in the first prototype, I will decide whether to stick with my current LED or switch back to the 0201 footprints. I may also switch to dual-color LEDs, providing more depth without complicating the circuit much more</p></div><div id="10e1953a-b5aa-8029-b557-e3d270939478" style="width:50%" class="column"><figure id="fff1953a-b5aa-815d-87b6-c7ef5847e41d" class="image"><a href="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/Screenshot_2024-09-27_at_9.22.44_AM.png"><img style="width:330.9921875px" src="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/Screenshot_2024-09-27_at_9.22.44_AM.png"/></a></figure><figure id="10e1953a-b5aa-8029-9dd2-c6cb295e43c4" class="image"><a href="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/Screenshot_2024-09-27_at_9.23.11_AM.png"><img style="width:2130px" src="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/Screenshot_2024-09-27_at_9.23.11_AM.png"/></a></figure></div></div><h2 id="10e1953a-b5aa-8011-a7be-d5b7827fe5dd" class="">IMU</h2><div id="10e1953a-b5aa-808d-a942-ff7d3b937ecf" class="column-list"><div id="10e1953a-b5aa-80f1-b7d4-ef60ac5f6895" style="width:50%" class="column"><p id="10e1953a-b5aa-8001-bff9-e00582de06b3" class="">The IMU was likely the hardest component to find in this project. I went through a number of selections, from gyroscopes, to accelerometers, to tilt sensors, and even fully integrated IMU units. </p><p id="10e1953a-b5aa-8011-983e-dfacfb4ad4b4" class="">In my selection for which component to use, my goal was to minimize component cost, while still having the ability to track the card’s orientation relative to gravity. This was to provide a reference to simulate the sand within the LED matrix.</p><p id="10e1953a-b5aa-80c5-80b4-d92a2e393d8d" class="">Initially, I was looking at expensive MEMS gyroscopes, naievely thinking that they would provide my exact roll, pitch, and yaw, rather than the angular acceleration. Upon realization that they weren’t providing my exact heading, I looked at accelerometers instead, hoping to use the acceleration measured from gravity, and use that to calculate the orientation of the card. I still made the mistake of looking for extremely accurate units, which resulted in prices of around 10$, massively out of scope if I hoped to mass-produce these cards. </p><p id="10e1953a-b5aa-80f1-b596-d4b143d8b164" class="">I then took a quick tangent looking at simple tilt sensors, for determining camera orientation, these sensors were incredibly cheap, and while completely viable for the project, needed too many pins, as they outputed unprocessed data from an IR receiver. I needed a component that could communicate directly through an I2C bus, and while I could go and setup a simple ADC, I instead began to look for cheaper accelerometers. </p><p id="10e1953a-b5aa-8047-9efd-eeb80d590d08" class="">Through refining the exact parameters needed to gauge gravity orientation, I ended up finding the <a href="https://www.notion.so/BMA400-10d1953ab5aa80f2a105e5d659b82665?pvs=21">BMA400</a>, a low-cost XYZ accelerometer produced by Bosch. Now this accelerometer seems too good to be true, it is super compact, with 1 and 2g ranges, and high enough resolution at these ranges to determine gravity orientation. It is also I2C enabled, and supports double-tap interrupts. All this for ~2$. Part of me worries that I’m overlooking something (which I probably am) but for all intents and purposes, this chip seems to do the trick.</p></div><div id="10e1953a-b5aa-8055-807c-d0d51781f0a5" style="width:50%" class="column"><figure id="10e1953a-b5aa-809e-9c1c-e976889692e3" class="image"><a href="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/Screenshot_2024-09-27_at_9.23.28_AM.png"><img style="width:702.984375px" src="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/Screenshot_2024-09-27_at_9.23.28_AM.png"/></a></figure><figure id="10e1953a-b5aa-80e8-b098-f37a494d6096" class="image"><a href="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/Screenshot_2024-09-27_at_9.23.20_AM.png"><img style="width:330.9921875px" src="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/Screenshot_2024-09-27_at_9.23.20_AM.png"/></a></figure><figure id="10e1953a-b5aa-805d-a1fd-e39a825458ab" class="image"><a href="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/image.png"><img style="width:1540px" src="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/image.png"/></a></figure><p id="10e1953a-b5aa-8084-9877-c7d6214a8ec6" class="">
</p></div></div><h2 id="10e1953a-b5aa-8040-a5f4-d1d816f7a1ef" class="">CPU</h2><div id="10e1953a-b5aa-809b-9c8f-d3f718b3e58c" class="column-list"><div id="9d2d0bbc-ace8-412b-aad2-0f2761914c65" style="width:50%" class="column"><p id="94b12554-0c33-4b6d-abd9-3323898db84f" class="">To determine which controller to use for the brains of the board, I decided to look for low cost, low-power microcontrollers, that were ideally relatively simple to use, with minimal dependencies. As the ATTINY was my go-to in these cases, I began designing the board around the simple little microcontroller. </p><p id="10e1953a-b5aa-8041-af9f-dd324e5d908c" class="">That is, until I learned about the <a href="https://www.notion.so/CH32V003F4P6-0cf33ee11cee4333973b6a9f7f1267cf?pvs=21">CH32V003F4P6</a>. This little microcontroller seems like a MONSTER of a chip, it is a 32-bit RISC-V2A processor, running at 48-MHz, with 2KB of SRAM and 16KB of flash memory. It supports low-power modes, has a BUILT IN ADC, up to 18 GPIO ports, I2C, SPI,  and USART interfaces, and supports 1 wire serial debug (SDI), all for an unbelievabley cheap 3$ per 50 pcs on AliExpress. Now I realize that I may be getting scammed and shipped some resistors and epoxy, but for the low cost, I was willing to risk it (and for some reason the processor isn’t on Digikey or Mouser). TLDR, I hopefully have 200 chips arriving in the mail at some unspecified time in the future </p><p id="10e1953a-b5aa-80fc-a946-e8241a31d1b6" class="">
</p></div><div id="2c9a181a-3b21-4dbc-b38a-d37121ca4661" style="width:50%" class="column"><figure id="10e1953a-b5aa-806d-8003-c3bc508449eb" class="image"><a href="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/Screenshot_2024-09-27_at_9.22.59_AM.png"><img style="width:330.9921875px" src="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/Screenshot_2024-09-27_at_9.22.59_AM.png"/></a></figure><figure id="10e1953a-b5aa-80ee-bb73-d76ee122681c" class="image"><a href="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/Screenshot_2024-09-27_at_9.22.50_AM.png"><img style="width:330.9921875px" src="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/Screenshot_2024-09-27_at_9.22.50_AM.png"/></a></figure></div></div><h2 id="10e1953a-b5aa-80dd-be3e-dbd50d6fcad1" class="">Battery</h2><div id="10e1953a-b5aa-80c2-a5a5-e9cc8477438e" class="column-list"><div id="13c5b760-e0f6-42d3-8c31-0c717daebde8" style="width:50%" class="column"><p id="fd61b6ff-a992-4b8f-bf34-d702a1668744" class="">Figuring out a power source was a tough decision that reflected my entire design approach. The battery was the primary limitation when it came to features that could be included, specifically the max current draw of the battery. </p><p id="10e1953a-b5aa-8078-9c11-e4a44486926b" class="">In early brainstorming, I was floating many power options</p><ul id="10e1953a-b5aa-80b0-87e7-d05d6c89b199" class="bulleted-list"><li style="list-style-type:disc">Unpowered<ul id="10e1953a-b5aa-8098-b64c-f7e3d37d3804" class="bulleted-list"><li style="list-style-type:circle">Virtually no functionality aside from NFC</li></ul></li></ul><ul id="10e1953a-b5aa-801e-bc30-fde0fb0335a6" class="bulleted-list"><li style="list-style-type:disc">Thin-Film lithium<ul id="10e1953a-b5aa-80f1-883a-d01298439aee" class="bulleted-list"><li style="list-style-type:circle">Incredibly small capacity</li></ul><ul id="10e1953a-b5aa-80be-bc01-f2bc03adcf98" class="bulleted-list"><li style="list-style-type:circle">Rechargeable through NFC energy harvesting</li></ul><ul id="10e1953a-b5aa-8041-ad92-e75b4a657f7c" class="bulleted-list"><li style="list-style-type:circle">Low current draw</li></ul></li></ul><ul id="10e1953a-b5aa-8046-8d0d-f9408fd968bd" class="bulleted-list"><li style="list-style-type:disc">LiPo<ul id="10e1953a-b5aa-8073-9318-f9fa2f5500c4" class="bulleted-list"><li style="list-style-type:circle">Low-profile options</li></ul><ul id="10e1953a-b5aa-8077-9f6d-e22563daa153" class="bulleted-list"><li style="list-style-type:circle">Expensive</li></ul><ul id="10e1953a-b5aa-806d-a962-d7920d2dadb5" class="bulleted-list"><li style="list-style-type:circle">Would need charging/voltage circuitry</li></ul></li></ul><ul id="10e1953a-b5aa-8079-9ab7-ddf7a52e86ea" class="bulleted-list"><li style="list-style-type:disc">Coin Cell<ul id="10e1953a-b5aa-803a-97f6-f29f211c9da1" class="bulleted-list"><li style="list-style-type:circle">Medium-profile</li></ul><ul id="10e1953a-b5aa-8094-a158-d91370c6464b" class="bulleted-list"><li style="list-style-type:circle">Cheap</li></ul><ul id="10e1953a-b5aa-80b6-b11c-ce1de603be72" class="bulleted-list"><li style="list-style-type:circle">Not-rechargeable</li></ul></li></ul><p id="10e1953a-b5aa-805a-8058-dc0f126f01b1" class="">In the end, I decided to follow the simplest approach of a coin cell battery. </p></div><div id="8d435e5e-7f59-4987-9f2e-a913c23e7ae7" style="width:50%" class="column"><figure id="10e1953a-b5aa-80ad-9f15-eb5812051181" class="image"><a href="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/image%201.png"><img style="width:328.5px" src="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/image%201.png"/></a></figure><figure id="10e1953a-b5aa-80ee-8183-ebc05c69ccd2" class="image"><a href="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/image%202.png"><img style="width:330.9921875px" src="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/image%202.png"/></a></figure><figure id="10e1953a-b5aa-805f-a11a-f08602ef55e2" class="image"><a href="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/image%203.png"><img style="width:331px" src="PCB%20Business%20Card%201071953ab5aa817c8e55cdb8658a9c46/image%203.png"/></a></figure></div></div><hr id="fff1953a-b5aa-81df-82c0-d3bbc80764bc"/><h1 id="fff1953a-b5aa-81ea-aec8-d8357ce43f76" class="">Conclusion</h1><div id="fff1953a-b5aa-815c-8c3c-ccb2832af30b" class="column-list"><div id="fff1953a-b5aa-8107-b489-c78152c927af" style="width:50%" class="column"><p id="fff1953a-b5aa-81e6-b035-fd03805eecad" class="">This project is still in progress, I don’t have a good conclusion yet…</p></div><div id="fff1953a-b5aa-81b6-9531-fdfde4fbc0fd" style="width:50%" class="column"><figure id="fff1953a-b5aa-812c-9431-f6f4731a3108"><a href="https://github.com/LoveAsAConstruct/Business-Card" class="bookmark source"><div class="bookmark-info"><div class="bookmark-text"><div class="bookmark-title">LoveAsAConstruct/Business-Card</div><div class="bookmark-description">Repository for software running on a PCB business card - LoveAsAConstruct/Business-Card</div></div><div class="bookmark-href"><img src="https://github.com/fluidicon.png" class="icon bookmark-icon"/>https://github.com/LoveAsAConstruct/Business-Card</div></div><img src="https://opengraph.githubassets.com/a226b720562ba2b66b12eb9a5efbfc2d8d4abc5db0a3b12a77e4100f045e1dea/LoveAsAConstruct/Business-Card" class="bookmark-image"/></a></figure></div></div><figure id="fff1953a-b5aa-8112-86be-de272aea83a9" class="image"><a href="https://www.notion.so"><img src="https://www.notion.so"/></a></figure><div id="fff1953a-b5aa-8181-ad39-d210a1dd6ac0" class="column-list"><div id="fff1953a-b5aa-8105-b45a-d100dc7cc7ec" style="width:50%" class="column"><figure id="fff1953a-b5aa-8117-bbf5-c42cab90917d" class="image"><a href="https://www.notion.so"><img src="https://www.notion.so"/></a></figure></div><div id="fff1953a-b5aa-81ba-9493-e1f8fe87ee3e" style="width:50%" class="column"><figure id="fff1953a-b5aa-8106-a156-dde53521b725" class="image"><a href="https://www.notion.so"><img src="https://www.notion.so"/></a></figure></div></div></div></article><span class="sans" style="font-size:14px;padding-top:2em"></span></body>