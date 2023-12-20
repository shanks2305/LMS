import React from 'react'

const UserAvatar = ({ name, width, height, text }: { name: string; width: number, height: number; text: number }) => {
    const nameParts = name.split(" ");
    const firstNameInitial = nameParts[0] ? nameParts[0][0] : "";
    const lastNameInitial = nameParts[1] ? nameParts[1][0] : "";

    return (
        <span className={`user-profile-image`} style={{
            width: width,
            height: height,
            fontSize: text
        }} >
            {firstNameInitial}
            {lastNameInitial}
        </span>
    )
}

export default UserAvatar