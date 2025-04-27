import React, { useState } from 'react'

const User = ({ html_url, avatar_url, name, followers, following, created_at }) => {
    return (
        <div className="flex flex-col items-center gap-4">
            <img src={avatar_url} alt="" className="w-24 h-24 rounded-full" />
            {name &&
                <div className="">
                    <p className="">{name}</p>
                </div>
            }
            <div className="">
                <p className="">Joined at - {created_at}</p>
            </div>
            <div className="">
                <p className="">followers - {followers}</p>
            </div>
            <div className="">
                <p className="">following - {following}</p>
            </div>

            <div className="">
                <a href={html_url} className="p-2 hover:underline">
                    Visit profile
                </a>
            </div>
        </div>
    )
}

export default function GithubProfileFinder() {
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [isError, setIsError] = useState(false);

    const fetchGithubUser = async (username) => {
        try {
            setIsLoading(true);
            setIsError(false);
            console.log(import.meta.env.VITE_YOUR_PERSONAL_ACCESS_TOKEN);
            const token = import.meta.env.VITE_YOUR_PERSONAL_ACCESS_TOKEN;
            const response = await fetch(`https://api.github.com/users/${username}`, {
                headers: {
                    'Authorization': `token ${token}`
                }
            });
            if (!response.ok) {
                throw new Error('User not found');
            }
            const data = await response.json();
            if (data && data.login) {
                setUserData(data);
                console.log(data)
            }
        } catch (error) {
            setIsError(true);
            setUserData(null);
            console.error(error);
        }
        finally {
            setIsLoading(false);
        }
    }



    return (
        <div className="w-full container">
            <div className="mx-auto w-fit flex gap-5 items-center mt-10">
                <input onKeyDown={(e) => e.key === 'Enter' && fetchGithubUser(username)}
                    type="text" className="p-1 focus:outline-none  rounded-lg border " placeholder='Enter Username...' onChange={(e) => setUsername(e.target.value)} />
                <button onClick={() => fetchGithubUser(username)} className="bg-green-600 text-white px-2 py-1 rounded-lg cursor-pointer" disabled={isLoading}>Search</button>
            </div>
            <div className="content w-[500px] p-8 mx-auto ">
                {isLoading &&
                    <div className="loader  flex justify-center">
                        <div className="h-14 w-14 border-4 rounded-full border-t-gray-400 border-gray-400/50 animate-spin"></div>
                    </div>
                }

                {!isLoading && userData && !isError &&
                    <User html_url={userData.html_url} avatar_url={userData.avatar_url} name={userData.name} followers={userData.followers} following={userData.following} created_at={userData.created_at} />
                }

                {isError &&
                    <h1 className="text-red-500 font-medium text-[2rem] border rounded-lg p-2 text-center">User Not Found</h1>
                }


            </div>
        </div>
    )
}
