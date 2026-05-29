import { Button } from '@/components/ui/button'
import { Logout } from '@hugeicons/core-free-icons'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/server'
import React from 'react'

function Dashboard() {
  return (
    <div>
      Dashboard
      <Button>
        <LogoutLink>Logout</LogoutLink>
      </Button>
    </div>
  )
}

export default Dashboard
