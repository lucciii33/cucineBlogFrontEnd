const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		user:[]
			
		},
		actions: {
			loginToken: async (email, password) => {
				console.log("function called")
				const resp = await fetch('https://5000-lucciii33-blogcucinebac-1rglp335x37.ws-us83.gitpod.io/api/users/login', {
				  method: "POST",
				  headers: { "Content-Type": "application/json",
				// "Access-Control-Allow-Origin": '*'
				},
				  body: JSON.stringify({ email, password })
				});
				console.log("after fetch")
				if (!resp.ok) throw "Problem with the response";
		
				if (resp.status === 401) {
				  throw "Invalid credentials";
				} else if (resp.status === 400) {
				  throw "Invalid email or password format";
				}
				const data = await resp.json();
				console.log("data", data)
				// save your token in the sessionStorage
				setStore({ user: data });
				// sessionStorage.setItem("jwt-token", data.access_token);
				// console.log(loggId)
				return data
			  },

			  registerUser: async (email, password) => {
				const resp = await fetch(`https://5000-lucciii33-blogcucinebac-1rglp335x37.ws-us83.gitpod.io/api/users`, {
				  method: "POST",
				  headers: { "Content-Type": "application/json" },
				  body: JSON.stringify({ email, password })
				});
		
				if (!resp.ok) throw "Problem with the response";
		
				if (resp.status === 401) {
				  throw "Invalid credentials";
				} else if (resp.status === 400) {
				  throw "Invalid email or password format";
				}
			  },

			  
	}};
};

export default getState;