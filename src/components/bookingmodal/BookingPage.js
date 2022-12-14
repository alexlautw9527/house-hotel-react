import { useBookingContext } from '../../hooks/useBookingContext'

import RoomAmenityIcon from '../common/RoomAmenityIcon'
import BookingForm from './BookingForm'

import { MODAL_ACTION, ACTION } from '../../actions/action_type'

import { imageSrc } from '../../helpers/image_index'


export default function BookingPage({ handleBookingStatusChange, onCloseModalClick }) {

  const { bookingState, bookingDispatch, modalState, modalDispatch } = useBookingContext()
  const { amenities, descriptionShortStr, roomData } = bookingState
  const {
    rightArrowIcon,
    searchIcon,
    paymentIcon,
    bookingIcon,
    crossIcon,
  } = imageSrc.general




  function handleBookingStatusChange(isSuccess) {
    isSuccess ? modalDispatch({ type: MODAL_ACTION.SET_SUCCESS_STATUS }) : modalDispatch({ type: MODAL_ACTION.SET_FAILED_STATUS })
  }

  function handleCalenderDateChange(item, dateType) {
    bookingDispatch({
      type: ACTION.CHANGE_SINGLEDATE, payload: {
        [dateType]: item
      }
    })
  }

  return (
    <>
      <main className="flex w-full h-full">

        <section className="basis-2/5 bg-primary text-primary px-10 pt-10 pb-5">
          <BookingForm
            onBookingStatusChange={handleBookingStatusChange}
            onCalenderDateChange={handleCalenderDateChange}
          />
        </section>

        <div className="basis-4/5 bg-white px-10 pt-12 relative overflow-scroll">
          <button
            className='absolute top-3 right-3'
            onClick={() => { onCloseModalClick() }}
          >
            <img src={crossIcon} alt="" />
          </button>

          <section>
            <div className='flex items-center'>
              <h1 className="text-xl font-bold">
                {roomData['name']}
              </h1>
              <div className='ml-1 h-[1px] grow bg-slate-200'>
              </div>
            </div>

            <div className='py-3'>
              <div className='mb-7'>
                <p> {
                  [
                    descriptionShortStr['guestRangeStr'],
                    descriptionShortStr['breakfastAvailableStr'],
                    descriptionShortStr['bedNumStr'],
                    descriptionShortStr['privateBathAvailableStr'],
                    descriptionShortStr['footageStr']
                  ].join('???')
                }</p>
                <p>
                  {
                    `??????????????????????????????${roomData['normalDayPrice']} / ??????????????????????????????${roomData['holidayPrice']}`
                  }
                </p>
              </div>


              <div className='flex flex-wrap gap-4'>
                {
                  amenities.filter(ele => ele['isAvailable'] === true).map(
                    ele => {
                      return (
                        <div className="">
                          <RoomAmenityIcon
                            src={ele['src']}
                            isAvailable={ele['isAvailable']}
                            name={ele['name']}
                            key={ele['name']}
                          />
                        </div>
                      )
                    }
                  )
                }
              </div>
            </div>

          </section>

          <section>
            <div className='flex items-center'>
              <h1 className="font-bold">
                ????????????
              </h1>
              <div className='ml-1 h-[1px] grow bg-slate-200'>
              </div>
            </div>
            <ul className="list-disc text-sm font-light leading-loose	py-3">
              <li>
                {
                  `?????????????????????${roomData['checkInAndOut']['checkInEarly']}?????????${roomData['checkInAndOut']['checkInLate']}??????????????????${roomData['checkInAndOut']['checkOut']}?????????????????????????????????`
                }
              </li>
              <li>??????????????????????????????????????????????????????????????????????????? </li>
              <li>????????????????????????????????? </li>
              <li>???????????????????????????????????? 03-8321155 ( ???????????? ??????????????? 10:00 - 18:00 )???</li>
            </ul>
          </section>

          <section>
            <div className='flex items-center'>
              <h1 className="font-bold">
                ????????????
              </h1>
              <div className='ml-1 h-[1px] grow bg-slate-200'>
              </div>
            </div>
            <div className='flex items-stretch py-3'>
              <section className='basis-1/3 grow'>
                <div className='flex flex-col h-full'>
                  <div className='h-12 py-2 bg-secondary  flex justify-center'>
                    <img src={paymentIcon} alt="" />
                  </div>
                  <p className='border border-secondary  px-3 py-2 text-center text-secondary rounded-b-lg h-full'>
                    ?????????????????????
                  </p>
                </div>
              </section>

              <div className='h-12 flex items-center justify-center px-2'>
                <img src={rightArrowIcon} alt="" />
              </div>

              <section className='basis-1/3 grow'>
                <div className='flex flex-col h-full'>
                  <div className='h-12 py-2 bg-secondary  flex justify-center'>
                    <img src={searchIcon} alt="" />
                  </div>
                  <p className='border border-secondary  px-3 py-2 text-center text-secondary rounded-b-lg h-full'>
                    ???????????????????????????????????? ?????????????????????????????? (?????????????????????????????????)
                  </p>
                </div>
              </section>

              <div className='h-12 flex items-center justify-center px-2'>
                <img src={rightArrowIcon} alt="" />
              </div>


              <section className='basis-1/3 grow'>
                <div className='flex flex-col h-full'>
                  <div className='h-12 py-2 bg-secondary  flex justify-center'>
                    <img src={bookingIcon} alt="" />
                  </div>
                  <p className='border border-secondary  px-3 py-2 text-center text-secondary rounded-b-lg h-full'>
                    ??????????????????????????? ?????????????????????????????? (?????????VISA.JCB.?????????)
                  </p>
                </div>
              </section>
            </div>
          </section>
        </div>
      </main >
    </>
  )
}