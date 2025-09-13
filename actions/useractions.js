"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDB"
import User from "@/models/User"


export const initiate = async (amount, to_user, paymentform) => {
    await connectDB()
    var instance = new Razorpay({
        key_id: process.env.NEXT_PUBLIC_KEY_ID,
        key_secret: process.env.KEY_SECRET,
    })

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",

    }

    let x = await instance.orders.create(options)

    await Payment.create({ oid: x.id, amount: amount/100, to_user: to_user, name: paymentform.name, message: paymentform.message })

    return x

    instance.orders.all().then(console.log).catch(console.error);
}


export const fetchuser = async (username) => {
    await connectDB()
    let u = await User.findOne({ username: username })
    let user = u.toObject({ flattenObjectIds: true })
    return user
}

export const fetchpayments = async (username) => {
    await connectDB()
    let p = await Payment.find({ to_user: username,done:true }).sort({ amount: -1 }).lean()
    return p
}

export const updateProfile = async (DataTransfer, oldusername) => {
    await connectDB()
    let ndata = Object.fromEntries(data)
    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "Username already exists" }
        }

    }
    await User.updateOne({email: ndata.email},ndata)
}