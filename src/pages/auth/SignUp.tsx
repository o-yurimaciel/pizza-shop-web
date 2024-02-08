import { Label } from '@radix-ui/react-label'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const SignUpForm = z.object({
  email: z.string().email(),
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
})

type SignUpForm = z.infer<typeof SignUpForm>

export function SignUp() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    console.log(data)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Restaurant successfully registered', {
        action: {
          label: 'LogIn',
          onClick: () => {
            navigate('/sign-in')
          },
        },
      })
    } catch (error) {
      toast.error('An error occurred when trying to register your restaurant')
    }
  }

  return (
    <>
      <Helmet title="Sign up" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Already have an account? Sign in</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create free account
            </h1>
            <p className="text-sm text-muted-foreground">
              Be partner and start your sellings!
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Restaurant Name</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register('restaurantName')}
              ></Input>
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Manager Name</Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
              ></Input>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" {...register('email')}></Input>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="text" {...register('phone')}></Input>
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Sign up
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              To continue, you accept our{' '}
              <a href="" className="underline underline-offset-1">
                terms of service
              </a>{' '}
              and{' '}
              <a href="" className="underline underline-offset-1">
                privacy policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
