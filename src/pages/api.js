import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Head from "@docusaurus/Head";
import Layout from "@theme/Layout";
import React from "react";
import { RedocStandalone } from "redoc";

const redocOptions = {
	pathInMiddlePanel: true,
	hideDownloadButton: true,
	theme: {
		colors: {
			primary: {
				main: "#0055FF",
			},
			success: {
				main: "#00A96D",
			},
			warning: {
				main: "#C2923D",
				contrastText: "#FFF",
			},
			error: {
				main: "#F35535",
			},
			gray: {
				50: "#F6F6F6",
				100: "#EEEEEE",
			},
			text: {
				primary: "#141414",
			},
			border: {
				dark: "rgba(0,0,0, 0.1)",
				light: "#FFF",
			},
			responses: {
				info: {
					color: "#8FB4FF",
				},
			},
			http: {
				get: "#00A96D",
				post: "#0041C2",
				put: "#491AC2",
				delete: "#F35535",
			},
		},
		sectionVertical: "36px",
		typography: {
			fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
			fontSize: "15px",
			lineHeight: "1.6em",
			headings: {
				fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
				fontWeight: "600",
			},
			code: {
				fontSize: "13px",
				fontFamily: `SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;`,
				color: "#0055FF",
				borderRadius: "8px",
				backgroundColor: "rgba(38, 50, 56, 0.05)",
				wrap: false,
			},
			links: {
				color: "#0055FF",
			},
		},
		sidebar: {
			width: "260px",
			backgroundColor: "#FFFFFF",
			textColor: "#2d292a",
			groupItems: {
				textTransform: "uppercase",
			},
		},
		menu: {
			backgroundColor: "#FFFFFF",
			activeTextColor: "#0055FF",
		},
		logo: {
			maxHeight: 0,
			maxWidth: 0,
			gutter: 0,
		},
		rightPanel: {
			backgroundColor: "#141414",
		},
		codeBlock: {
			backgroundColor: "#000000",
		},
	},
};

const apiUrl =
	"https://raw.githubusercontent.com/OAI/OpenAPI-Specification/main/examples/v3.0/api-with-examples.yaml";

const CoreAPI = () => {
	const {
		siteConfig: { customFields },
	} = useDocusaurusContext();

	return (
		<Layout noFooter={true}>
			<Head>
				<link rel="preload" as="fetch" href={apiUrl} />
			</Head>
			<BrowserOnly fallback={<div>API documentation</div>}>
				{() => <RedocStandalone options={redocOptions} specUrl={apiUrl} />}
			</BrowserOnly>
		</Layout>
	);
};

export default CoreAPI;
