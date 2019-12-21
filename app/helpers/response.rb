class Response
    attr_accessor :message, :status_code, :data

    def initialize(message,status_code,data)
        self.message = message
        self.status_code = status_code
        self.data = data
    end

    def to_json
        {
            message:self.message,
            data:self.data
        }
    end
end