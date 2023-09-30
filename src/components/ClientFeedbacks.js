import React from 'react';
import SectionTitle from './SectionTitle';
import Chat from '../images/chat-bubble-dynamic-color.svg';
import FeedbackProfile1 from '../images/feedback-profile1.svg';
import FeedbackProfile2 from '../images/feedback-profile2.svg';
import FeedbackProfile3 from '../images/feedback-profile3.svg';
import FeedbackProfile4 from '../images/feedback-profile4.svg';
import FeedbackProfile5 from '../images/feedback-profile5.svg';
import FeedbackProfile6 from '../images/feedback-profile6.svg';
import FeedbackProfile7 from '../images/feedback-profile7.svg';
import FeedbackOrg1 from '../images/feedback-org1.svg';
import Notify from '../images/notify-heart-front-color.svg';
import Thumb from '../images/thumb-up-dynamic-color.svg';

function FeedbackCard({
  message,
  userName,
  designation,
  profile,
  companyProfile,
}) {
  return (
    <div className="grid gap-5 p-6 bg-white rounded-3xl">
      <span className="font-urbanist text-brown text-2xl font-normal text-left">
        {message}
      </span>
      <div className="border border-light-gray"></div>
      <div className="flex gap-3">
        <div className="relative">
          <img src={profile} />
          <div className="absolute bg-white border rounded-full h-8 w-8 flex justify-center items-center -bottom-2 -right-1">
            <img src={companyProfile} />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="font-urbanist text-brown text-2xl font-bold">
            {userName}
          </span>
          <span className="font-urbanist text-brown text-xl font-normal">
            {designation}
          </span>
        </div>
      </div>
    </div>
  );
}

function ClientFeedbacks() {
  const feedbacks1 = [
    {
      message:
        'The data that was previously only relevant for scientific research is now having a significant impact in the competitive world of digital marketing',
      userName: 'Olivier Humeau',
      designation: 'President - Flaunt',
      profile: FeedbackProfile1,
      companyProfile: FeedbackOrg1,
    },
    {
      message:
        'With the increasing controversy around the use of cookies, it is important to consider alternative ways of collecting customer data. Emonomy offers a deeper understanding of customer preferences through emotional response analysis',
      userName: 'Olivier Humeau',
      designation: 'President - Flaunt',
      profile: FeedbackProfile2,
      companyProfile: FeedbackOrg1,
    },
  ];
  const feedbacks2 = [
    {
      message:
        'Applying emotional AI to plan marketing communications has never been so efficient. I believe it is one of the most powerful technology for the next five years',
      userName: 'Menno van der Steen',
      designation: 'Chief Data & MSc GroupM',
      profile: FeedbackProfile3,
      companyProfile: FeedbackOrg1,
    },
    {
      message:
        'A cost-effective neuromarketing solution that helps to plan marketing efforts fast and at  a large scale',
      userName: 'Menno van der Steen',
      designation: 'Chief Data & MSc GroupM',
      profile: FeedbackProfile4,
      companyProfile: FeedbackOrg1,
    },
    {
      message:
        'Emonomy technology gave us a significant competitive advantage in the market',
      userName: 'Menno van der Steen',
      designation: 'Chief Data & MSc GroupM',
      profile: FeedbackProfile5,
      companyProfile: FeedbackOrg1,
    },
  ];
  const feedbacks3 = [
    {
      message:
        'In a world where so many companies compete for attention, being noticed by a consumer at the right moment is a major challenge',
      userName: 'Barbara Pederzolli',
      designation: 'Consumer Data Global senior manager',
      profile: FeedbackProfile6,
      companyProfile: FeedbackOrg1,
    },
    {
      message:
        'The ability to generate an emotional response is what sets a great advertising campaign apart. Companies must consider the emotional impact of their campaigns, and Emonomy can accurately provide a clear understanding of the effect that creatives have on their target audience',
      userName: 'Barbara Pederzolli',
      designation: 'Consumer Data Global senior manager',
      profile: FeedbackProfile7,
      companyProfile: FeedbackOrg1,
    },
  ];
  return (
    <section id="client-feedbacks" className="bg-brown px-8 pt-16 pb-28">
      <div className="container mx-auto grid gap-10 place-items-center">
        <img src={Chat} />
        <SectionTitle
          title="Here are what our clients says"
          color="orange"
          borderColor="#F75603"
          borderGapColor="#4E240E"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="flex flex-col gap-6">
            {feedbacks1.map(
              (
                { message, userName, designation, profile, companyProfile },
                i
              ) => (
                <div>
                  <FeedbackCard
                    key={i}
                    message={message}
                    userName={userName}
                    designation={designation}
                    profile={profile}
                    companyProfile={companyProfile}
                  />
                </div>
              )
            )}
            <div className="lg:justify-center lg:items-center hidden lg:flex">
              <img src={Notify} />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {feedbacks2.map(
              (
                { message, userName, designation, profile, companyProfile },
                i
              ) => (
                <div>
                  <FeedbackCard
                    key={i}
                    message={message}
                    userName={userName}
                    designation={designation}
                    profile={profile}
                    companyProfile={companyProfile}
                  />
                </div>
              )
            )}
          </div>
          <div className="flex flex-col gap-6">
            {feedbacks3.map(
              (
                { message, userName, designation, profile, companyProfile },
                i
              ) => (
                <div>
                  <FeedbackCard
                    key={i}
                    message={message}
                    userName={userName}
                    designation={designation}
                    profile={profile}
                    companyProfile={companyProfile}
                  />
                </div>
              )
            )}
            <div className="lg:justify-center lg:items-center hidden lg:flex">
              <img src={Thumb} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientFeedbacks;
