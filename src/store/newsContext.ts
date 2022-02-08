import React,{ createContext,useEffect,useState } from "react";
import axios from "axios";

export interface NewsContextInterface {
    id: string;
    title: string;
    publishAt: string;
    description: string;
    content: string;
    url: string;
}

export const NewsContext = React.createContext<NewsContextInterface | null>(null);

const NewsContextProvider: React.FC = (props) => {
	const [data,setData]=React.useState<NewsContextInterface[]>([] as NewsContextInterface[]);
	const apiKey = "5aa36b6a0a44433cbc649687b8a6d4a3";

	useEffect(() => {
		axios.get(
			`https://newsapi.org/v2/everything?q=apple&from=2022-02-07&to=2022-02-07&sortBy=popularity&apiKey=${apiKey}`
		)
		.then((response)=>setData(response.data()))
		.catch((error)=>console.log(error));
	}, [data]);

    return <NewsContext.Provider value={data}>{props.children}</NewsContext.Provider>
	
};

export default NewsContextProvider;
