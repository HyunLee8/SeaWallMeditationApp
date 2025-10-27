import TypographyH4 from '../../components/text/TypographyH4'
import TypographyP from '../../components/text/TypographyP'

export default function Subscription() {
  return (
    <div>
      <div className="flex h-screen justify-center flex-col items-center gap-8 px-10 pt-35 mb-50">
        <div className="w-full max-w-xl h-40 bg-white flex items-center rounded-2xl text-black">
          <div className="pl-10 ">
            <TypographyH4>12 months, 119.99$</TypographyH4>
            <TypographyP>Only 10$/month. Billed Annually</TypographyP>
          </div>
        </div>
        <div className="w-full max-w-xl h-40 bg-white flex items-center rounded-2xl text-black">
          <div className="pl-10">
            <TypographyH4>4 months, 59.99$</TypographyH4>
            <h2>Only 5$/month. Billed quarterly</h2>
          </div>
        </div>
        <div className="w-full max-w-xl h-40 bg-white flex items-center rounded-2xl text-black">
          <div className="pl-10">
            <TypographyH4>1 month, 19.99$</TypographyH4>
            <h2>Billed monthly</h2>
          </div>
        </div>
        <div className="w-full max-w-xl h-40 bg-white flex items-center rounded-2xl text-black">
          <div className="pl-10"> 
            <TypographyH4>Lifetime, 249.99$</TypographyH4>
            <h2>Pay just once</h2>
          </div>
        </div>
      </div>
    </div>
  )
}