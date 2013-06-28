CarrierWave::SanitizedFile.sanitize_regexp = /[^[:word:]\.\-\+]/

aws_file = Rails.root.join('config', 'aws_config.yml')

if File.exists?(aws_file)
	AWS_CONFIG = YAML.load(File.read(aws_file))[Rails.env]

	CarrierWave.configure do |config|

		config.fog_credentials = {
		  :provider               => 'AWS',
		  :aws_access_key_id      => AWS_CONFIG['AWS_ACCESS_KEY_ID'],
		  :aws_secret_access_key  => AWS_CONFIG['AWS_SECRET_ACCESS_KEY']
		}

		config.fog_directory  = AWS_CONFIG['bucket']
		config.fog_public     = false
	end
end