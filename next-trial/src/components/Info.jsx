import Infopic from "@/pics/Infopic";

function Info() {
  return (
    <div className="box-border px-[80px] py-[96px] bg-gray-50">
      <div className="w-[1280px] px-[32px] flex flex-col gap-[48px] ">
        <div className="text-center">
          <span className="bg-gray-200 py-[4px] px-[20px] rounded-xl text-[14px]">
            About me
          </span>
        </div>
        <div className="flex gap-[48px]">
          <div className="w-[584px]">
            <Infopic />
          </div>
          <div className="w-[584px] flex flex-col gap-[24px]">
            <h1 className="text-[30px] font-semibold mt-0">
              Curious about me? Here you have it:
            </h1>
            <div className="flex flex-col gap-[16px]">
              <p>
                I'm a designer turned full stack developer, passionate about
                React.js and Node.js. I excel in blending technical and visual
                aspects to craft exceptional digital products, prioritizing user
                experience, precise design, and optimized code.
              </p>
              <p>
                Since starting my web development journey in 2015, I've embraced
                challenges and kept up with the latest tech trends. Now in my
                early thirties, seven years in, I'm building cutting-edge web
                apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase,
                and more.
              </p>
              <p>
                With a progressive mindset, I enjoy the entire product
                development process, from ideation to execution. Off duty,
                you'll find me on Twitter, tracking startup journeys, or
                unwinding. Follow me for tech insights and public project
                updates on Twitter or GitHub.
              </p>
              <p>Finally, some quick bits about me.</p>
              <div className="flex gap-[10px]">
                <div className="w-[287px]">
                  <li>B.E. in Computer Engineering</li>
                  <li>Full time freelancer</li>
                </div>
                <li>Avid learner</li>
              </div>
              <p>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Info;
