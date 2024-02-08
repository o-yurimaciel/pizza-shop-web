import { Label } from '@radix-ui/react-label'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    toast.success('Success', {
      action: {
        label: 'Resend',
        onClick: () => {
          handleSignIn(data)
        },
      },
    })
  }

  return (
    <>
      <Helmet title="LogIn" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-up">New store</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              LogIn panel
            </h1>
            <p className="text-sm text-muted-foreground">
              Track your sales through the partner panel
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" {...register('email')}></Input>
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              LogIn
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
