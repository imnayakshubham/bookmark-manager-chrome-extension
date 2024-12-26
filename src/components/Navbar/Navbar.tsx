import { GoogleLogin } from '@react-oauth/google'
import { BookmarkIcon, Menu } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import apiClient from '../../lib/axiosInstance';
import { appName, useUserContext } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { APIError } from '../../constants/types';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [userIp, setUserIp] = useState(null)

    const navigateTo = useNavigate()
    const { userInfo, updateUser, logout } = useUserContext()

    const fetchIP = useCallback(async () => {
        try {
            const response = await apiClient.get('https://api.ipify.org?format=json');
            setUserIp(response.data?.ip)
        } catch (error) {
            console.error('Error fetching IP address:', error);
        }
    }, [])

    useEffect(() => {
        fetchIP()
    }, [fetchIP])


    const fetchUser = async (token: string) => {
        try {
            const response = await apiClient.post("/login", { user_ip: userIp }, {
                headers: {
                    token: `${token}`
                }
            })

            if (response.status === 200) {
                const user = response.data?.result
                if (user) {
                    updateUser(user, true)
                    navigateTo("/dashboard")
                }
            }
        } catch (error) {
            if (error instanceof Error) {
                alert("Something went wrong")
            } else {
                const err = error as APIError
                if (err?.status === 401) {
                    localStorage.removeItem(`${appName}__info`)
                }
            }
        }
    }

    return (
        <header className="px-4 lg:px-6 h-12 flex items-center fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
            <a className="flex items-center justify-center" href="/">
                <BookmarkIcon className="h-6 w-6 mr-2" />
                <span className="font-bold">Bookmark Manager</span>
            </a>
            <button
                className="ml-auto lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <Menu className="h-6 w-6" />
            </button>
            <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex absolute lg:static left-0 right-0 top-14 lg:top-0 flex-col lg:flex-row items-center gap-4 p-4 lg:p-0 bg-background lg:bg-transparent lg:ml-auto border-b shadow-sm md:border-none md:shadow-none`}>
                <a className="text-sm font-medium hover:underline underline-offset-4" href="#features">
                    Features
                </a>
                <a className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
                    How It Works
                </a>

            </nav>
            <div className='ml-2 user__login__actions'>

                {
                    !userInfo?.token ?
                        <GoogleLogin
                            size='small'
                            onSuccess={credentialResponse => {
                                if (credentialResponse.credential) {
                                    fetchUser(credentialResponse.credential)
                                }
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                            useOneTap
                        />
                        : <Button

                            onClick={() => {
                                logout()
                                navigateTo("/")
                            }}

                            className='p-1 m-1 bg-red-500 hover:bg-red-500'>
                            Logout
                        </Button>
                }
            </div>
        </header>
    )
}

