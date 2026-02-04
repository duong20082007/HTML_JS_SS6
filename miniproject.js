let loginSuccess = false;
let retryCount = 0;

while (retryCount < 3) {
    let userName = prompt("Tài khoản:");
    let password = prompt("Mật khẩu:");

    if (userName === "admin" && password === "12345") {
        loginSuccess = true;
        alert("Đăng nhập thành công!");
        break;
    } else {
        retryCount++;
        alert(`Sai tài khoản hoặc mật khẩu! Bạn còn ${3 - retryCount} lần thử.`);
    }
}

if (!loginSuccess) {
    console.log("Tài khoản đã bị khóa");
} else {
    let libraries = ["Toán", "Văn", "Anh"];
    let isRunning = true;

    while (isRunning) {
        let choice = prompt(`
            CHỌN CHỨC NĂNG: 
            1. Nhập thêm lô sách mới 
            2. Hiển thị danh sách sách
            3. Tìm kiếm sách
            4. Cập nhật tên sách
            5. Đảo ngược thứ tự kệ sách 
            6. Nhập kho từ nguồn khác 
            7. Thoát chương trình
        `);

        switch (choice) {
            case 1: 
                let bookInput = prompt("Nhập danh sách tên sách:");
                if (bookInput) {
                    let newBooks = bookInput.split(",");
                    for (let i = 0; i < newBooks.length; i++) {
                        libraries.push(newBooks[i].trim());
                    }
                    console.log(`Đã thêm thực tế ${newBooks.length} cuốn sách vào kho.`);
                }
                break;

            case 2: 
                for (let i = 0; i < libraries.length; i++) {
                    console.log(`${i + 1}. ${libraries[i]}`);
                }
                break;

            case 3: 
                let searchName = prompt("Nhập tên sách cần tìm:");
                let foundIndex = -1;
                for (let i = 0; i < libraries.length; i++) {
                    if (libraries[i].toLowerCase() === searchName.toLowerCase()) {
                        foundIndex = i;
                        break;
                    }
                }
                if (foundIndex !== -1) {
                    console.log(`Sách [${searchName}] được tìm thấy tại vị trí [${foundIndex}]`);
                } else {
                    console.log("Không tìm thấy");
                }
                break;

            case 4: 
                let oldName = prompt("Nhập tên sách cần sửa:");
                let editIndex = -1;
                for (let i = 0; i < libraries.length; i++) {
                    if (libraries[i].toLowerCase() === oldName.toLowerCase()) {
                        editIndex = i;
                        break;
                    }
                }

                if (editIndex !== -1) {
                    let newName = prompt("Nhập tên mới:");
                    libraries[editIndex] = newName;
                    console.log("Cập nhật thành công!");
                } else {
                    console.log("Lỗi: Sách không tồn tại trong kho.");
                }
                break;

            case 5: 
                libraries.reverse();
                for (let i = 0; i < libraries.length; i++) {
                    console.log(`Index ${i}: ${libraries[i]}`);
                }
                break;

            case 6: 
                let otherBranch = ["Sách Kỹ Năng", "Truyện Tranh"];
                libraries = libraries.concat(otherBranch);
                console.log("Đã gộp kho sách thành công.");
                break;

            case 7: 
                console.log("Hẹn gặp lại!");
                isRunning = false;
                break;

            default:
                alert("Lựa chọn không hợp lệ, vui lòng chọn từ 1-7.");
                break;
        }
    }
}