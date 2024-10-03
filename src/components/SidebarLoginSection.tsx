import { IconArrowRight, IconUser } from '@tabler/icons-react'
import { SidebarLink } from './ui/sidebar'
import { useState } from 'react'

const SidebarLoginSection = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    return (
        <div>
            {loggedIn ?
                <SidebarLink
                    link={{
                        label: "Lucas Camacho",
                        href: "#",
                        icon: (
                            <IconUser className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                        ),
                    }}
                />
                : <SidebarLink
                    link={{
                        label: "Iniciar sesión",
                        href: "/login",
                        icon: (
                            <IconArrowRight className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                        ),
                    }}
                />
            }
        </div>
    )
}

export default SidebarLoginSection